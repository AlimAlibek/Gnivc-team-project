import React from 'react';
import Button from '@ff/ui-kit/lib/Button';

type ButtonProps = {
  value: string;
  onClick: (value: string) => void;
  variant: 'fill' | 'text' | 'outline' ;
};

const ActionButtons: React.FC<{ buttons: ButtonProps[] }> = ({ buttons }) => (
  <>{
        buttons.map((button) => (
          <Button
            onClick={() => button.onClick(button.value)}
            variant={button.variant}
            type="primary"
          >
            {button.value}
          </Button>
        ))
    }
  </>
);

export default ActionButtons;
