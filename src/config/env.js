const env = {
  eventpassUrl: process.env.NEXT_PUBLIC_EVENTPASS_URL || 'https://eventpass.whitewall.solutions/',
  formspreeFormId: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'abcdefg',
  node_env: process.env.NEXT_PUBLIC_NODE_ENV || 'development',
};

export default env;
