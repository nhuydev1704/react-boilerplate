import { Button, Checkbox, Form, Input } from "antd";
import { AuthActions } from "@/app-redux/auth";
import CircularProgress from "@/components/CircularProgress";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLink from "@/components/AppLink";
import config from "@/config";
import wLogo from "@/assets/images/w-logo.png";
import Logo from "@/assets/images/logo.png";
const LoginPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);
  const [loading, setLoading] = React.useState(false);
  // const { loading } = auth;
  const handleSubmit = async (value) => {
    setLoading(true);
    dispatch(AuthActions.setUser({ email: "123" }));

    // const returnUrl = router?.query?.returnUrl || '/';
    // setTimeout(() => {
    //     setLoading(false);

    //     router.push(returnUrl);
    // }, 1000);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img
                  src="	https://wieldy.g-axon.work/assets/images/appModule/neature.jpg"
                  alt="Neature"
                />
              </div>
              <div className="gx-app-logo-wid">
                <h1>Đăng nhập</h1>
                <p>
                  Bằng cách Đăng ký, bạn có thể tận dụng các tính năng đầy đủ
                  của các dịch vụ của chúng tôi.
                </p>
                <p>Nhận một tài khoản !!!</p>
              </div>
              <div className="gx-app-logo">
                <img alt="example" src={Logo} />
              </div>
            </div>
            <div className="gx-app-login-content">
              <Form
                onFinish={handleSubmit}
                className="gx-signin-form gx-form-row0"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Vui lòng nhập đúng địa chỉ E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Nhập địa chỉ email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input.Password type="password" placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item initialValue={true}>
                  <Checkbox checked>Bằng cách đăng ký, tôi chấp nhận</Checkbox>
                  <span className="gx-signup-form-forgot gx-link">
                    Kì hạn và điều kiện
                  </span>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="gx-mb-0">
                    Đăng nhập
                  </Button>
                  <span>hoặc </span>
                  <AppLink href={config.routes.register}>Đăng ký</AppLink>
                </Form.Item>
                <div className="gx-flex-row gx-justify-content-between">
                  <span>hoặc đăng nhập bằng</span>
                  <ul className="gx-social-link">
                    <li>
                      {/* <Icon
                                            type="google"
                                            onClick={() => {
                                                this.props.showAuthLoader();
                                                this.props.userGoogleSignIn();
                                            }}
                                        /> */}
                    </li>
                    <li>
                      {/* <Icon
                                            type="facebook"
                                            onClick={() => {
                                                this.props.showAuthLoader();
                                                this.props.userFacebookSignIn();
                                            }}
                                        /> */}
                    </li>
                    <li>
                      {/* <Icon
                                            type="github"
                                            onClick={() => {
                                                this.props.showAuthLoader();
                                                this.props.userGithubSignIn();
                                            }}
                                        /> */}
                    </li>
                    <li>
                      {/* <Icon
                                            type="twitter"
                                            onClick={() => {
                                                this.props.showAuthLoader();
                                                this.props.userTwitterSignIn();
                                            }}
                                        /> */}
                    </li>
                  </ul>
                </div>
              </Form>
            </div>

            {loading ? (
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
            ) : null}
            {/* {showMessage ? message.error(alertMessage.toString()) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
