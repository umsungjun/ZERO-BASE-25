import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React from 'react';
import { Button } from 'react-onsenui';

export default function Onsen() {
  const handleClick = () => {
    alert('눌림');
  };
  return (
    <div>
      <Button onClick={handleClick} modifier="large--cta">
        {/* modifier는 UI의 형태를 의미 함 */}
        Tap me
      </Button>
      <br />
      <Button onClick={handleClick} modifier="outline">
        {/* modifier는 UI의 형태를 의미 함 */}
        Tap me
      </Button>
      <br />
      <Button onClick={handleClick} modifier="light">
        {/* modifier는 UI의 형태를 의미 함 */}
        Tap me
      </Button>
      <br />
      <Button onClick={handleClick} modifier="quiet">
        {/* modifier는 UI의 형태를 의미 함 */}
        Tap me
      </Button>
      <br />
      <Button onClick={handleClick} modifier="material--flat">
        {/* modifier는 UI의 형태를 의미 함 */}
        Tap me
      </Button>
      <br />
    </div>
  );
}
