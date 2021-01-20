import Section from "@/components/Section";
import { testProps } from "../../src/config/constants";
import { mount } from "@vue/test-utils";

describe("Section.vue", () => {
  test("mount a Section component", () => {
    const wrapper = mount(Section, {
      propsData: {
        section: testProps,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("computed", () => {
  test("render seats", () => {
    const { vm } = mount(Section, {
      propsData: {
        section: testProps,
      },
    });

    vm.dataToDisplay.rows[0].seats.forEach((seat) => {
      expect(seat).toHaveProperty("group");
      expect(seat).toHaveProperty("groupColor");
    });

    vm.dataToDisplay.rows[1].seats.forEach((seat) => {
      expect(seat).not.toHaveProperty("group");
      expect(seat).not.toHaveProperty("groupColor");
    });
  });
});

describe("method", () => {
  const { vm } = mount(Section, {
    propsData: {
      section: testProps,
    },
  });

  test("booked", () => {
    expect(
      vm.booked({
        seat: "1",
        rank: "rank1",
        group: "gr2",
        groupColor: "hsla(277,70%,40%,1)",
      })
    ).toStrictEqual({ background: "hsla(277,70%,40%,1)" });

    expect(vm.booked({ seat: "1", rank: "rank1" })).toStrictEqual({
      background: "#e1dde0",
    });

    expect(vm.booked({ seat: "5", rank: "rank2" })).toStrictEqual({
      background: "#9C9C9C",
    });
  });
});
