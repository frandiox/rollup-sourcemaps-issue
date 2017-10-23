export default class m1 {
  constructor() {
    console.log('New m1 instance');
    document.createElement('div');
    console.log('Break point here?');
    console.log('Or here?');
    const element = document.createElement('div');
    console.log('Or here?', element);
  }
};
