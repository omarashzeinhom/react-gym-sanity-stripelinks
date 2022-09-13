## STEPS 

# 1. - BackEnd Sanity and Stripe
1. Create new folders /library/stripe in ./backend directory


2. install  [SWR - stale-while-revalidate- React Hooks for Data Fetching](https://swr.vercel.app/)
-Based on [ HTTP RFC 5861.](https://www.rfc-editor.org/rfc/rfc5861)
 ```
 yarn add swr
 ```

4. GET STRIPE API KEYS
- Signup to [stripe](https://stripe.com/)
- Go to [DashBoard](https://dashboard.stripe.com/) and get API KEYS
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
```
REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51LgJSeLiZAbNGcKOMadZJOspum1fTo7lwDrH1zcM69l7MvRic1VItzVLqxZileiDujlFfpawsTA2kdn9FQsQWzkm00LU4GfvIR
REACT_APP_STRIPE_SECRET_KEY=sk_test_51LgJSeLiZAbNGcKOOBZjm7rB0kSCUUekWGKy9B0jiWTZ38dIxXrvTtp8Lxclo33OXlyHFBNbqjpKzP0EZIAtgFae00wtpW5eAz
```

```
REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY=
REACT_APP_STRIPE_SECRET_KEY=
```


1. Add Packages used in tutorial
- ADD 
```@stripe/react-stripe-js @stripe/stripe-js``` According to [Stripe - React JS Docs ](https://stripe.com/docs/stripe-js/react)
- ADD ```use-shopping-cart```From[useshoppingcart](https://useshoppingcart.com/)
- ADD ```swr ```From[swr-Vercel](https://swr.vercel.app/)

```
//for yarn
yarn add @stripe/react-stripe-js @stripe/stripe-js use-shopping-cart swr

//for npm 
npm install --save @stripe/react-stripe-js @stripe/stripe-js use-shopping-cart swr
```













## Front End 

1. Create 2 new components Checkout.jsx and 






























###### References
1. [](https://www.sanity.io/guides/building-ecommerce-sites-with-the-stripe-api)
2. [](https://useshoppingcart.com/)
3. [Stripe - React JS Docs ](https://stripe.com/docs/stripe-js/react)
4. [Stripe - Docs - API/Products](https://stripe.com/docs/api/products)
5. [Model good-better-best on Stripe ](https://stripe.com/docs/products-prices/pricing-models)
6. [loadStripe from '@stripe/stripe-js'](https://github.com/stripe/stripe-js/blob/master/README.md#loadstripe)