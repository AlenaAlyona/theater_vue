import App from "../../src/App.vue";
import { mount } from "@vue/test-utils";

describe("App.vue", () => {
  test("mount App.vue", () => {
    const LayoutStub = {
      props: ["layout", "groups"],
    };

    const wrapper = mount(App, {
      stubs: {
        Layout: LayoutStub,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
