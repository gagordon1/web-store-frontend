export const FORD_FOCUS_WIKIPEDIA_DESCRIPTION = "The Ford Focus (first generation) is a compact car that was manufactured by Ford in Europe from 1998 to 2004 and by Ford in North America from 1999 to 2007. Ford began sales of the Focus to Europe in July 1998 and in North America during 1999 for the 2000 model year. Manufacturing in Argentina continued until 2008, and it was still on sale in Brazil until 2009."

export const PRODUCTION = true;

export const STORE_NAME = "Drip Town";

const STRIPE_TEST_PUBLISHABLE_API_KEY= "pk_test_51KQyC1LqSz5uCrfjrBlU5h0pUWPyaeQUF3FQIqrV7t1ZXTbSvQ7hfXYd4YJJipA3C6hR4noImSX1kEmv6BHCRQXg00AjCjsyOs";

const STRIPE_LIVE_PUBLISHABLE_API_KEY="pk_live_51KQyC1LqSz5uCrfjlCnWxsedC5un4vTA3cpKQRihqzzHyLiJfHlb04QDZYWDLco5t8sSJST5jiXIpEi0dgrbNRlT00rODeDoXu";

export const STRIPE_PUBLISHABLE_KEY = PRODUCTION? STRIPE_LIVE_PUBLISHABLE_API_KEY : STRIPE_TEST_PUBLISHABLE_API_KEY;

export const STRIPE_ACCOUNT_ID = "acct_1KQyC1LqSz5uCrfj";

export const ACCOUNT_EMAIL = "downbeatcorp@gmail.com"

export const DEFAULT_PRODUCT_DESCRIPTION = FORD_FOCUS_WIKIPEDIA_DESCRIPTION

//maps id to description
export const ITEM_DESCRIPTIONS  = {
  276143794 : FORD_FOCUS_WIKIPEDIA_DESCRIPTION,
  276143906 : FORD_FOCUS_WIKIPEDIA_DESCRIPTION,
  276108743 : FORD_FOCUS_WIKIPEDIA_DESCRIPTION,
  275969640 : FORD_FOCUS_WIKIPEDIA_DESCRIPTION

}
