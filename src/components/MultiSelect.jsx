import React, {useState} from 'react';
import useSelectionChange from '../hooks/useSelectionChange';
import {Actionsheet} from 'native-base';
import {List, Text} from 'native-base';

export default function MultiSelect() {
  const [items, setItems] = useState(null);

  const selectionMode = useSelectionChange(items);

  const toggleSelect = item => {
    setItems(
      items.map(i => {
        if (item === i) {
          i.selected = !i.selected;
        }
        return i;
      }),
    );
  };

  const clearSelection = () => {
    setItems(
      items.map(i => {
        i.selected = false;
        return i;
      }),
    );
  };

  const onPress = item => {
    if (selectionMode) {
      toggleSelect(item);
    } else {
      pressItem(item);
    }
  };

  const pressItem = item => {
    console.log(JSON.stringify(item) + ' pressed');
  };

  const renderItem = item => {
    return (
      <List.Item onPress={() => onPress(item)} key={item.id}>
        <Text>{item.name}</Text>
      </List.Item>
    );
  };

  return renderItem();
}

function SelectionListHeader(props) {
  const onPressSelectionActions = () => {
    Actionsheet.show(
      {
        options: props.selectActions.map(action => action.name),
        cancelButtonIndex: props.selectActions.length - 1,
      },
      buttonIndex => {
        onExecuteAction(buttonIndex);
      },
    );
  };

  const onExecuteAction = index => {
    if (props.selectActions[index].method) {
      props.selectActions[index].method.apply();
    }
  };

  return (
    <Header>
      {props.selectionMode ? (
        <Left>
          <Button transparent onPress={props.clearSelection}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      ) : (
        <></>
      )}

      <Body>
        <Text>
          {props.selectionMode ? props.selectedItemsCount : props.title}
        </Text>
      </Body>
      <Right>
        {props.selectionMode ? (
          <>
            <Button transparent>
              <Icon
                name="md-more"
                onPress={onPressSelectionActions}
                style={{paddingLeft: 25, paddingTop: 10, paddingBottom: 10}}
              />
            </Button>
          </>
        ) : (
          <></>
        )}
      </Right>
    </Header>
  );
}

function MainSelectionListHeader({items}) {
  return (
    <SelectionListHeader
      selectionMode={selectionMode}
      title="Movies"
      selectedItemsCount={items.filter(i => i.selected).length}
      clearSelection={clearSelection}
      selectActions={[
        {
          name: 'Delete',
          method: function () {
            clearSelection();
          },
        },
        {
          name: 'Cancel',
        },
      ]}
    />
  );
}
