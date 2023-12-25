import { Meta, Story } from '@storybook/react'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta

const Template: Story<DropdownProps> = (args) => (
  <div
    style={{
      backgroundColor: 'black',
      height: '100vh',
      margin: 0,
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Dropdown {...args} />
  </div>
)

export const Default: Story<DropdownProps> = Template.bind({})
Default.args = {
  title: <h3>Click here to open dropdown</h3>,
  children: <h2>This is dropdown content</h2>
}
