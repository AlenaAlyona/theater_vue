import Layout from "@/components/Layout";
import { mount } from "@vue/test-utils";
import { layout, groups } from "../../src/config/constants";

describe("Layout.vue", () => {
  test("mount a Layout component", () => {
    const wrapper = mount(Layout, {
      propsData: {
        layout: layout,
        groups: groups,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("computed", () => {
  test("adding groups to sections", () => {
    const { vm } = mount(Layout, {
      propsData: {
        layout: layout,
        groups: groups,
      },
    });

    vm.sectionsToDisplay.forEach((section) => {
      expect(section).toHaveProperty("groups");

      section.groups.forEach((group) => {
        expect(group).toHaveProperty("color");
        expect(group).toHaveProperty("id");
        expect(group).toHaveProperty("phone");
      });
    });
  });
});
