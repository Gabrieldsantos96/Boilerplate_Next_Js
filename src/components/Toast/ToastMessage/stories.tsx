import { Meta, Story } from '@storybook/react'
import ToastMessage, { ToastMessageProps } from '.'
import { Wrapper } from '../ToastList/styles'

export default {
  title: 'ToastMessage',
  component: ToastMessage
} as Meta

const Template: Story<ToastMessageProps> = (args) => (
  <div style={{ margin: '5rem' }}>
    <Wrapper>
      <ToastMessage {...args} />
    </Wrapper>
  </div>
)

export const Default: Story<ToastMessageProps> = Template.bind({})
Default.args = {
  message: {
    id: 1,
    type: 'danger',
    text: 'Mensagem de erro!',
    duration: 5000
  }
}

export const Success: Story<ToastMessageProps> = Template.bind({})
Success.args = {
  message: {
    id: 1,
    type: 'success',
    text: 'Operação concluída com sucesso!',
    duration: 3000
  }
}

export const Warning: Story<ToastMessageProps> = Template.bind({})
Warning.args = {
  message: {
    id: 3,
    type: 'warning',
    text: 'Esta é uma mensagem de aviso.',
    duration: 4000
  }
}
