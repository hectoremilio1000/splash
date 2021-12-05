import React, { useState, useRef } from "react";
import { useSpring, Transition, config, animated } from "react-spring";

export default function App() {
  const [toogle, setToogle] = useState(false);

  return (
    <Transition
      items={toogle}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      reverse={toogle}
      delay={200}
      config={config.molasses}
      onRest={() =>
        setToogle({
          toggle: !toogle,
        })
      }
    >
      {({ opacity }, item) =>
        item ? (
          <animated.div
            style={{
              position: "absolute",
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}
          >
            😄
          </animated.div>
        ) : (
          <animated.div
            style={{
              position: "absolute",
              opacity: opacity.to({ range: [1.0, 0.0], output: [0, 1] }),
            }}
          >
            🤪 final
          </animated.div>
        )
      }
    </Transition>
  );
}
