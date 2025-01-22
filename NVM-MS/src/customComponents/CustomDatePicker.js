import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_HEIGHT = 45;
const VISIBLE_ITEMS = 3;
const CustomDatePicker = ({
  // Required props
  onDateChange,
  initialDate = new Date(),
  // Optional props
  minYear = 2000,
  maxYear = 2050,
  mode = 'month-year', // 'year', 'month-year', 'full-date'
  theme = 'light', // 'light' or 'dark'
  show,
  setShow,
}) => {
  const [date, setDate] = useState(initialDate);
  const [selectedMonth, setSelectedMonth] = useState(initialDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(initialDate.getFullYear());
  const [selectedDay, setSelectedDay] = useState(initialDate.getDate());
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ];
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i
  );
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const days = Array.from(
    { length: getDaysInMonth(selectedMonth, selectedYear) },
    (_, i) => i + 1
  );
  const formatDate = useCallback(() => {
    switch (mode) {
      case 'year':
        return selectedYear.toString();
      case 'month-year':
        return `${months[selectedMonth]} ${selectedYear}`;
      case 'full-date':
        return `${selectedDay} ${months[selectedMonth]} ${selectedYear}`;
      default:
        return `${selectedDay}/${selectedMonth + 1}/${selectedYear}`;
    }
  }, [selectedDay, selectedMonth, selectedYear, mode]);

  
  const handleConfirm = () => {
    const newDate = new Date(selectedYear, selectedMonth, selectedDay);
    setDate(newDate);
    onDateChange(newDate);
    setShow(false);
  };
  const renderSelector = (title, items, selectedItem, onItemSelect) => {
    const scrollRef = useRef(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    // Fix initial position when modal opens
    useEffect(() => {
      if (scrollRef.current && selectedItem !== undefined) {
        let initialIndex = 0;
        if (typeof items[0] === 'number') {
          initialIndex = items.findIndex(item => item === selectedItem);
        } else {
          initialIndex = selectedItem;
        }
        scrollRef.current.scrollTo({
          y: initialIndex * ITEM_HEIGHT,
          animated: false
        });
      }
    }, [show]); // Add show to dependencies to run when modal opens
    const handleItemPress = (index) => {
      const value = typeof items[index] === 'number' ? items[index] : index;
      onItemSelect(value);
      scrollRef.current?.scrollTo({
        y: index * ITEM_HEIGHT,
        animated: true,
      });
    };
    const renderItem = (item, index) => {
      // Calculate if this item is in the exact center
      const currentOffset = scrollOffset / ITEM_HEIGHT;
      const isCenter = Math.abs(index - currentOffset) < 0.5;
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.item,
            {
              height: ITEM_HEIGHT,
              opacity: isCenter ? 1 : 0.3,
              transform: [{ scale: isCenter ? 1 : 0.8 }],
            }
          ]}
          onPress={() => handleItemPress(index)}
          activeOpacity={0.7}
        >
          <Text style={[
            styles.itemText,
            isCenter && styles.centerItemText,
            { color: theme === 'dark' ? '#fff' : '#000' }
          ]}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.selectorContainer}>
        <Text style={[styles.selectorTitle, { color: theme === 'dark' ? '#292929' : '#000' }]}>
          {title}
        </Text>
        <View style={styles.pickerContainer}>
          <View style={styles.selectionOverlay}>
            <View style={styles.selectionHighlight} />
          </View>
          <ScrollView
            ref={scrollRef}
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            onScroll={(e) => {
              setScrollOffset(e.nativeEvent.contentOffset.y);
            }}
            onMomentumScrollEnd={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
              if (index >= 0 && index < items.length) {
                const value = typeof items[index] === 'number' ? items[index] : index;
                onItemSelect(value);
              }
            }}
            scrollEventThrottle={16}
            decelerationRate="normal"
            contentContainerStyle={{
              paddingVertical: ITEM_HEIGHT
            }}
            pointerEvents="auto"
          >
            {items.map(renderItem)}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={show}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShow(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShow(false)}
        >
          <Pressable
            style={[
              styles.modalContent,
              { backgroundColor: theme === 'dark' ? '#333' : '#fff' }
            ]}
            onPress={(e) => {
              // Prevent event from bubbling up to parent Pressable
              e.stopPropagation();
            }}
          >
            <View style={styles.selectionContainer}>
              {mode === 'full-date' && renderSelector(
                'Day',
                days,
                selectedDay,
                setSelectedDay
              )}
              {(mode === 'month-year' || mode === 'full-date') && renderSelector(
                'Month',
                months,
                selectedMonth,
                setSelectedMonth
              )}
              {renderSelector(
                'Year',
                years,
                selectedYear,
                setSelectedYear
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.actionButton, styles.cancelButton, {backgroundColor:'#fff',borderWidth:0.5,borderColor:'#292929'}]}
                onPress={() => setShow(false)}
              >
                <Text style={[styles.actionButtonText, { color:'#292929'}]}>Cancel</Text>
              </TouchableOpacity>
              <Pressable
                style={[styles.actionButton, styles.confirmButton, { backgroundColor: '#8569F4'}]}
                onPress={handleConfirm}
              >
                <Text style={[styles.actionButtonText, { color:'#fff'}]}>Confirm</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#333',
    fontFamily: 'Montserrat-Regular',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width - 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    maxHeight: 400,
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: ITEM_HEIGHT * VISIBLE_ITEMS + 20,
  },
  selectorContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  selectorTitle: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  scrollView: {
    flex: 1,
  },
  item: {
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',  // Make sure touch area covers full width
  },
  itemText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  centerItemText: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    gap: 10,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F0F0F0',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
  },
  actionButtonText: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
  pickerContainer: {
    height: ITEM_HEIGHT * 3,
    overflow: 'hidden',
  },
  selectionHighlight: {
    position: 'absolute',
    top: ITEM_HEIGHT,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    zIndex: 1,
  },
  selectionOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },
});
export default CustomDatePicker;