import '@testing-library/jest-dom';

import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useState } from 'react';

describe('CoderPad', () => {
  describe.skip('Tutorial', () => {
    describe('Question 1', () => {
      const Child = ({ color }) => <div style={{ color }}>Hello World</div>;

      const Parent = () => {
        const [colorState, setColorState] = useState('red');

        return (
          <div>
            <Child color={colorState} />
            <button onClick={() => setColorState('green')}>Change Color</button>
          </div>
        );
      };

      it('should change color to green', async () => {
        // arrange
        // act
        render(<Parent />);
        await act(() => userEvent.click(screen.getByText('Change Color')));

        // assert
        expect(screen.getByText('Hello World')).toHaveStyle({ color: 'green' });
      });

      it('should change color to red', async () => {
        // arrange
        // act
        render(<Parent />);
        await act(() => userEvent.click(screen.getByText('Change Color')));

        // assert
        expect(screen.getByText('Hello World')).toHaveStyle({ color: 'red' });
      });
    });

    describe('Question 2', () => {
      const Label = ({ value, color }) => <div style={{ color }}>{value}</div>;

      // function Preview() {
      //   return <Label value={'Solution'} color={'blue'} />;
      // }

      it('Has expected label', function () {
        render(<Label value={'Solution'} color={'blue'} />);
        screen.getByText('Solution');
      });

      it('Has expected color', function () {
        render(<Label value={'Solution'} color={'blue'} />);

        expect(screen.getByText('Solution')).toHaveStyle({ color: 'blue' });
      });
    });
  });

  describe('Challenge', () => {
    it('should ', () => {
      // arrange
      // act
      // assert
    });
  });
});
