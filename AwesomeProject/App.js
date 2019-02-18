import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native'
import stripe from 'tipsi-stripe';
stripe.setOptions({
  publishableKey: 'pk_test_mKSXznMR2vsjzUkvHhUmLaqg',
})
// const theme = {
//   primaryBackgroundColor: '#000',
//   secondaryBackgroundColor: '#fff',
//   primaryForegroundColor: '#000',
//   secondaryForegroundColor: '#000',
//   accentColor: '#000',
//   errorColor: 'red'
// };
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {Stripetoken:''};
    this.loadCardForm= this.loadCardForm.bind(this)
  }
  async loadCardForm(){
    const options = {
      
    }
    stripe.paymentRequestWithCardForm(options)
      .then(response => {
        console.log('here is response:', response)
        this.setState({
          Stripetoken: response.tokenId
        })
      })
      .catch(error => {
        // Handle error
      });
    
  }
  componentDidMount() {
    
   
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
     <Button
        onPress={this.loadCardForm}
        title="Pay"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>{this.state.Stripetoken}</Text>
       </View>

    );
  }
}

export default App;








// import React, {Component} from 'react';
// import {
//   CardElement,
//   injectStripe,
//   StripeProvider,
//   Elements,
// } from 'react-stripe-elements';

// // You can customize your Elements to give it the look and feel of your site.
// const createOptions = () => {
//   return {
//     style: {
//       base: {
//         fontSize: '16px',
//         color: '#424770',
//         fontFamily: 'Open Sans, sans-serif',
//         letterSpacing: '0.025em',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//       },
//       invalid: {
//         color: '#c23d4b',
//       },
//     }
//   }
// };

// class _CardForm extends Component {
//   state = {
//     errorMessage: '',
//   };

//   handleChange = ({error}) => {
//     if (error) {
//       this.setState({errorMessage: error.message});
//     }
//   };

//   handleSubmit = (evt) => {
//     evt.preventDefault();
//     if (this.props.stripe) {
//       this.props.stripe.createToken().then(this.props.handleResult);
//     } else {
//       console.log("Stripe.js hasn't loaded yet.");
//     }
//   };

//   render() {
//     return (
//       <div className="CardDemo">
//         <form onSubmit={this.handleSubmit.bind(this)}>
//           <label>
//             Card details
//             <CardElement
//               onChange={this.handleChange}
//               {...createOptions()}
//             />
//           </label>
//           <div className="error" role="alert">
//             {this.state.errorMessage}
//           </div>
//           <button>Pay</button>
//         </form>
//       </div>
//     );
//   }
// }

// const CardForm = injectStripe(_CardForm);

// export class App extends Component {
//   constructor(props) {
//         super(props);
//         this.state = {};
//       }

//       loadStripe(onload) {
//         if(! window.StripeCheckout) {
//             const script = document.createElement('script');
//             script.onload = function () {
//                 console.info("Stripe script loaded");
//                 onload();
//             };
//             script.src = 'https://js.stripe.com/v3/';
//             document.head.appendChild(script);
//         } else {
//             onload();
//         }
//     }
//   render() {
//     return (
      // <StripeProvider apiKey={this.props.stripePublicKey}>
//       //   <Elements>
//       //     <CardForm handleResult={this.props.handleResult} />
//       //   </Elements>
//       // </StripeProvider>
// 




//       <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
//                {/* <StripeCheckout
//                 token={this.onToken}
//                 stripeKey="my_PUBLISHABLE_stripekey"
//               /> */}
//               <Text>
//                 Home
//               </Text>
//             </View>
//     );
//   }
// }