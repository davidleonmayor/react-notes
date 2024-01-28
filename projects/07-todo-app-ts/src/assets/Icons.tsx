import { IconButton } from "@chakra-ui/react";

function MagnifyingGlass() {
  return (
    <IconButton
      aria-label="Search database"
      variant="outline"
      colorScheme="blue"
      icon={
        <svg
          width="36px"
          height="36px"
          viewBox="0 0 1024 1024"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z"
            fill="#000000"
          />
        </svg>
      }
    />
  );
}

function Check() {
  return (
    <IconButton
      aria-label="Search database"
      variant="outline"
      colorScheme="teal"
      icon={
        <svg
          width="36px"
          height="36px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12.6111L8.92308 17.5L20 6.5"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    />
  );
}
// function Garbage({ handleGarbageButton }) {
//   return (
//     <IconButton
//       onClick={(e) => {
//         e.stopPropagation();
//         handleGarbageButton(e);
//       }}
//       icon={
//         <img
//           width="32px"
//           height="32px"
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE30lEQVR4nNVaa4iVVRRdo2ml1kBQljq+hR6KFeWIUqkRFJXZO6NISBGCMrIC0x8qjaZkaWpWltmDlAIr7R1lT2t6YC9RDCsxLZ0QSovRcm5sWCc2m32++z3udW4LPgbWOnt/+9x7ztn77DtA5dAZwDwAuwCUyjw7AcylTc3hvhQTsM8c1CB2MrgRKcaOVN9MzaHEp1rjC0HW8JMA9udYNpV69gNYUXQ/zWnHCZTMc2/W4HsDeBbAXjqQv33QfuhjYpHYGsoZ9TLHZxuAxWh/LDHfjsTYM8ngKQ7cAGAAag8DAXzCGGXvRvEbB52J2sVZjHFP0qDS/+yJ4sMaCK6U8vkAKfBlhix9uDCSMX2RxWgVjW5C7WACY3oui9HsvEmoimhiTLOyGN1Io+dRO3iBMd2QxaiRRhuddbqG2d9DRwDLyrzsWgDLAXSK6D25tIcb/ivGJLGlxnGqYKtT/CLyUyN2p1D/OsH3Ro45LaLfQX2h4upU4SqxZUJIjj0Udyc5KRk8DKC+LcHvDxzTP6IvdT6sXuRakAMbaHye4q4g91rE5kTqvyb43c0x3SP669QvV9xoch/nmMd/ddckxZ1ObnPE5hjq+xL8hiXSLaJvoT5UcZPJrcwxD8yg8Xwn0FYAHRybDqyY28zeCqhTesy+le84VvH3k5ueZyLX0PhFw7eQl3Xr4S/qXRytK7U/I7YNkYLwZfJX55gHzqDxJsM3kz8nYhcmeryjnRAJNOBc6p8afjN5WdqZ0ZVLoJX5IW358iP1fo7Wn5qcXGnLkI6MoS1hX6Vu8fR1SoWZEZvvqA92tCHUvo3YznJKozD5n1EA79HJBYqbSO7piE1zQgYeHlk6Ac9Qv1lxF5JbX2AeeIxOblHcGHJyd/HwLnUZZ3E+tXcith9Rl7wRcCu5RwvMA3fRyYOK61umS7iW+lhHu4yanEIedlHXXZuHyElVkRvj6ORVs/kOcPN5R2w4DMY72vUJd4qj6fOgOVxCppcPITdOpZOthv+evBSJFo9Tk71kMYna8gzv2pbwrtQ4EsA/AP42ZfebdH6xYxMq5CmOdrtT2QZcQu0NxXXmuw8BOAoFEarVQYpbRk42okVTQjkxI+HmeRu1hxV3coopqOjW8T/9ucg844+9J+O1jLrVpjiYHSokHTMBY51vKjcV0Jssi4CpyLznjp1CTJWYRTiD59BGpp65U3FRyYlcY4SuXC4+tw7ybYEiYsuktnnASXsA3Tj31SMISzoyL6OwtxdUn3DvGU5Nj2GI1tescTXyV6NsmV8nuhRGurz9FrsK2yg3rep3j6xVql0aq4hbD7yhzLc6EkAAPMWkFfBapqUIJI5+mxXqnBNE1WLPiujBByruPQIWwxel8rI5k8EYnKDv5YZGMv0pxQ8tcq3Mh1E9Sstif5Wy+GExeynmLTZFWUMgvTc7JGKvLcmEBnUr+sOWGPZ36RfaUYLtzv9Gn2UQnH8l9vWKY7NRIjZFfjuRm+QeAzx0/0kn/nWM0VjpLbgU5eXfFEPpK7xv+bNPt0P0tfYwG1Ef6WfX0Ve5uUhgN7fCfCnvKdGtyQfdepbdVbdSrtpHXHyuE0Hy2XfJqYBTfJR34iiNUrm9X+us26K36zvKDU8XRXR2fh+PZmucnhLSQTS8tG+m2V2sCv/BIPylLZP8C57pwn24OqiAAAAAASUVORK5CYII="
//         ></img>
//       }
//       aria-label="Add new item"
//       variant="unstyled"
//       _hover={{ bg: "none" }}
//       _active={{
//         bg: "none",
//         transform: "none",
//         borderColor: "transparent",
//       }}
//       _focus={{ boxShadow: "none" }}
//       marginBottom="6px" // Ajusta este valor según sea necesario
//     />
//   );
// }

function Garbage() {
  return (
    <IconButton
      icon={
        <img
          width="32px"
          height="32px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE30lEQVR4nNVaa4iVVRRdo2ml1kBQljq+hR6KFeWIUqkRFJXZO6NISBGCMrIC0x8qjaZkaWpWltmDlAIr7R1lT2t6YC9RDCsxLZ0QSovRcm5sWCc2m32++z3udW4LPgbWOnt/+9x7ztn77DtA5dAZwDwAuwCUyjw7AcylTc3hvhQTsM8c1CB2MrgRKcaOVN9MzaHEp1rjC0HW8JMA9udYNpV69gNYUXQ/zWnHCZTMc2/W4HsDeBbAXjqQv33QfuhjYpHYGsoZ9TLHZxuAxWh/LDHfjsTYM8ngKQ7cAGAAag8DAXzCGGXvRvEbB52J2sVZjHFP0qDS/+yJ4sMaCK6U8vkAKfBlhix9uDCSMX2RxWgVjW5C7WACY3oui9HsvEmoimhiTLOyGN1Io+dRO3iBMd2QxaiRRhuddbqG2d9DRwDLyrzsWgDLAXSK6D25tIcb/ivGJLGlxnGqYKtT/CLyUyN2p1D/OsH3Ro45LaLfQX2h4upU4SqxZUJIjj0Udyc5KRk8DKC+LcHvDxzTP6IvdT6sXuRakAMbaHye4q4g91rE5kTqvyb43c0x3SP669QvV9xoch/nmMd/ddckxZ1ObnPE5hjq+xL8hiXSLaJvoT5UcZPJrcwxD8yg8Xwn0FYAHRybDqyY28zeCqhTesy+le84VvH3k5ueZyLX0PhFw7eQl3Xr4S/qXRytK7U/I7YNkYLwZfJX55gHzqDxJsM3kz8nYhcmeryjnRAJNOBc6p8afjN5WdqZ0ZVLoJX5IW358iP1fo7Wn5qcXGnLkI6MoS1hX6Vu8fR1SoWZEZvvqA92tCHUvo3YznJKozD5n1EA79HJBYqbSO7piE1zQgYeHlk6Ac9Qv1lxF5JbX2AeeIxOblHcGHJyd/HwLnUZZ3E+tXcith9Rl7wRcCu5RwvMA3fRyYOK61umS7iW+lhHu4yanEIedlHXXZuHyElVkRvj6ORVs/kOcPN5R2w4DMY72vUJd4qj6fOgOVxCppcPITdOpZOthv+evBSJFo9Tk71kMYna8gzv2pbwrtQ4EsA/AP42ZfebdH6xYxMq5CmOdrtT2QZcQu0NxXXmuw8BOAoFEarVQYpbRk42okVTQjkxI+HmeRu1hxV3copqOjW8T/9ucg844+9J+O1jLrVpjiYHSokHTMBY51vKjcV0Jssi4CpyLznjp1CTJWYRTiD59BGpp65U3FRyYlcY4SuXC4+tw7ybYEiYsuktnnASXsA3Tj31SMISzoyL6OwtxdUn3DvGU5Nj2GI1tescTXyV6NsmV8nuhRGurz9FrsK2yg3rep3j6xVql0aq4hbD7yhzLc6EkAAPMWkFfBapqUIJI5+mxXqnBNE1WLPiujBByruPQIWwxel8rI5k8EYnKDv5YZGMv0pxQ8tcq3Mh1E9Sstif5Wy+GExeynmLTZFWUMgvTc7JGKvLcmEBnUr+sOWGPZ36RfaUYLtzv9Gn2UQnH8l9vWKY7NRIjZFfjuRm+QeAzx0/0kn/nWM0VjpLbgU5eXfFEPpK7xv+bNPt0P0tfYwG1Ef6WfX0Ve5uUhgN7fCfCnvKdGtyQfdepbdVbdSrtpHXHyuE0Hy2XfJqYBTfJR34iiNUrm9X+us26K36zvKDU8XRXR2fh+PZmucnhLSQTS8tG+m2V2sCv/BIPylLZP8C57pwn24OqiAAAAAASUVORK5CYII="
        ></img>
      }
      aria-label="Add new item"
      variant="unstyled"
      _hover={{ bg: "none" }}
      _active={{
        bg: "none",
        transform: "none",
        borderColor: "transparent",
      }}
      _focus={{ boxShadow: "none" }}
      marginBottom="6px" // Ajusta este valor según sea necesario
    />
  );
}

// theme icons
function Moon() {
  return (
    <img
      width="36"
      height="36"
      src="https://img.icons8.com/sf-regular-filled/48/moon-symbol.png"
      alt="moon-symbol"
    />
  );
}

function Sun() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"></path>
    </svg>
  );
}

function Plus() {
  return (
    <IconButton
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 50 50"
        >
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
        </svg>
      }
      aria-label="Add new item"
      variant="unstyled"
      _hover={{ bg: "none" }}
      _active={{
        bg: "none",
        transform: "none",
        borderColor: "transparent",
      }}
      _focus={{ boxShadow: "none" }}
      marginBottom="6px" // Ajusta este valor según sea necesario
    />
  );
}

function Pencil() {
  return (
    <IconButton
      aria-label="Search database"
      variant="outline"
      colorScheme="blue"
      icon={
        <img
          width="36px"
          height="36px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvElEQVR4nO2ZMUtDMRRGjyAIUlcruFhnF3+Bi45OdRTU6qO1XRzt5ubibjdx1E1XhwrddbcUQQd/gCKitk8C98E1VItC4UZzINDmpZDzvuRSEohEfssYME7ALANXwBvQBS6BeQJiGtgBekAKvIiM+/wEzBEA2/L2UxHZBUaBHHAi/ecEINGTybrWFoGMvPQ/EoBEF6gDtzLplpKZsi6SSbiWSN+MJzMBHMv3M4wvp7L3TMs8WN7s/p7Y7zNGy7i2hOE90VDltZ9MXZ69A5MYIhEBJ1KRviLwKhM+UGM31dgaRpMoec9WvGTKqgi435lOwqeokkmtJ+GWy3c0lERwSWRsWN0TWmLQ2y1FiSESk7BCTMJiEtW/UJ2qA8ZGCStJmP0Xm0QJIyQxCSMkMQmDSdQGjN0KocTWBoyNEsNk9QfHMGaPbEaAjpxi3MlRfnASjgV1pqSbOxHXVCxLOI5k4ofAtScTjEROLlHcBAuqPxPJhyDhWJcJN/lMlsx9CBLI9W8qQhkFWWb6LNa0xKy6dGmJTNO7iOlIaTbN3hfV6hk4BRalNJun7S0ft8zWvOvhILgAbiQZt8wikf/OB+i4E2KlT2dOAAAAAElFTkSuQmCC"
        ></img>
      }
    />
  );
}

export { MagnifyingGlass, Garbage, Check, Moon, Sun, Plus, Pencil };
