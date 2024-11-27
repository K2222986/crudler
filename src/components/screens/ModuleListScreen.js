import { LogBox, StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList.js';
import { useState } from 'react';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from  '../UI/Button.js';
import initialModules from '../../data/modules.js';

const ModuleListScreen = ({navigation}) => {
  // Initialisations ------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

  // State ----------------------------
  const [modules, setModules] = useState(initialModules);

  // Handlers -------------------------
  const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const handleAdd = (module) => setModules( [...modules, module] );

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const handleSelect = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete } );

  const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete} );
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', {onAdd});
  
  // View -----------------------------
  return (
    <Screen>  
      <ButtonTray>
        <Button label='Add' icon={<Icons.Add/>} onClick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
