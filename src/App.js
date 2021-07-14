import React,{useState} from "react";
import SortingVisualiser from "./SortingVisualiser/SortingVisualiser";
import Sample from "./Sample";
import { GeistProvider, CssBaseline } from '@geist-ui/react'
function App() {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider  themeType={themeType}>
    <CssBaseline />
    <SortingVisualiser />
  </GeistProvider>
  );
}

export default App;


