//
var user = {
    login: function(options) {

        // 使用ajax post 发送请求
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function(res) {
                if (res.code === 200) {
                    options.success();

                } else {
                    options.fail();
                }

            }

        })
    },
    logout: function(options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function(res) {
                if (res.code === 200) {
                    options.success();

                } else {
                    options.fail();
                }
            }

        })
    }
};