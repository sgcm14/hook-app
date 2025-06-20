import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ data, id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = h2Ref.current.getBoundingClientRect();

    setBoxSize({ height, width });
  }, [name]);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <pre>{data?.name}</pre>
      <h2 ref={h2Ref} className="text-capitalize">
        #{id}-{name}
      </h2>
      {/* imágenes */}
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
      <div>{JSON.stringify(boxSize)}</div>
    </section>
  );
};
