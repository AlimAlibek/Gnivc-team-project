import React from 'react';
import Button from '@ff/ui-kit/lib/Button';

type ButtonProps = {
  value: string;
  onClick: (value: string) => void;
  variant: 'fill' | 'text' | 'outline';
};
// Затея хорошая, может перейдем на них, но пока доработаю что есть. И не знаю как это пойдет с плоскостью кода.

const ActionButtons: React.FC<ButtonProps[]> = (buttons: ButtonProps[]) => (
  <>
    {buttons.map((button) => (
      <Button
        onClick={() => button.onClick(button.value)}
        variant={button.variant}
        type="primary"
      >
        {button.value}
      </Button>
    ))}
  </>
);

export default ActionButtons;
