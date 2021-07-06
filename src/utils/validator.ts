const validator = (reg: any) => (data: any) => reg.test(data);

const usernameValidator = validator(/^[a-zA-Z0-9_@.*#-]{5,30}$/i);
const passwordValidator = validator(/^[a-zA-Z0-9_@.*#-]{6,30}$/i);

export default {
  usernameValidator,
  passwordValidator,
};
