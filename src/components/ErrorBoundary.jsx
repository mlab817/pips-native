import React from 'react';
import { Box, Button, Text } from "native-base";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessage: null,
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error.toString(),
    }
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('ErrorMessage: ', JSON.stringify(error.message))
    console.error('Info: ', errorInfo)
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <Box style={{
          flex: 1
        }}
        >
          <Box
            style={{
              backgroundColor: '#fafafa',
            }}
          >
            
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                The page you are trying to visit how encountered the following error:{' '}
                {this.state.errorMessage}
              </Text>
          </Box>
        </Box>
      )
    }
    
    return this.props.children
  }
}

export default ErrorBoundary
