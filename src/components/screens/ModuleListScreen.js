import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList.js';
import { useState } from 'react';

import initialModules from '../../data/modules.js';

const ModuleListScreen = () => {
  // Initialisations ------------------
  const [modules, setModules] = useState(initialModules);

  // State ----------------------------
  // Handlers -------------------------
  const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const handleSelect = (module) => alert(`Item ${module.ModuleCode} selected`);
  
  // View -----------------------------
  return (
    <Screen>  
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
