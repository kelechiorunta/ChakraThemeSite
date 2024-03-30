import logo from './logo.svg';
import './App.css';
import ThemeProvider from './Components/ThemeProvider';
import ThemeComponent from './Components/ThemeComponent';
import { connect } from 'react-redux';
import { Text, Box } from '@chakra-ui/react';

function App({login_info}) {
  return (
    <ThemeProvider>
      <Box>
      <div className="App">
        {login_info.length>0 && login_info.map(info=>{
        return <Text w={'92%'} ml='auto' mr={'auto'} border={'none'} mb={-14} pt={4} textAlign={'right'} 
        fontSize={20} fontWeight={'bold'} fontFamily={'fantasy'}>{`${info.email}`}</Text>
        })}
          <ThemeComponent />
      </div>
      </Box>
      
    </ThemeProvider>
    
  );
}

const mapStateToProps = (state) => {
  const { userInfo } = state

  return { login_info: userInfo.loginParameters}
}

export default connect(mapStateToProps)(App);
