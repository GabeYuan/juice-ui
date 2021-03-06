import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'JuButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props)

    return () => {
      const defaulSlot = slots.default ? slots.default() : '按钮'
      return <button class={`s-btn s-btn--${type.value}`}>{defaulSlot}</button>
    }
  }
})
