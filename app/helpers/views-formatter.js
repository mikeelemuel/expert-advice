import { helper } from '@ember/component/helper';

function viewsFormatter(params) {
  return Math.abs(params) > 999
  ? Math.sign(params) * (Math.abs(params) / 1000).toFixed(1) + "k"
  : Math.sign(params) * Math.abs(params);
}

export default helper(viewsFormatter);