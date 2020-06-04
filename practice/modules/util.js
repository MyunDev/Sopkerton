//클라이언트한테 보내는 형식이 일정하므로 모듈화 한다. 재사용 편하게

module.exports = {
    success: (status, message, data) => {
      return {
        status: status,
        success: true,
        message: message,
        data: data,
      };
    },
    fail: (status, message) => {
      return {
        status: status,
        success: false,
        message: message,
      };
    },
  };