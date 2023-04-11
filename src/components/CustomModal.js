import React from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import CloseIcon from '../assets/svg/close.svg';
import {Fonts} from '../theme';

export default function CustomModal(props) {
  return (
    <Modal
      {...props}
      onBackButtonPress={() => props.closeModal()}
      onBackdropPress={() => props.closeModal()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.titleContainer}>
            <Text style={styles.heading}>Notification</Text>
            <TouchableOpacity onPress={() => props.closeModal()}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          {props.children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 36,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 23,
    fontFamily: Fonts.primaryHeavy,
    color: '#000',
  },
});
