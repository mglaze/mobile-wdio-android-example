const uiSelector = 'android=new UiSelector()';

module.exports = {
  by: {
    resourceId: resourceId => `${uiSelector}.resourceId("${resourceId}")`,
    text: text => `${uiSelector}.text("${text}")`,
  },
};