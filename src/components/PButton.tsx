import classNames from "classnames"

export function PButton(props: any) {
    return (
        <div className= {classNames('PButton', 'flex', 'items-center', 'justify-center', 'rounded-xl', 'p-4', 'w-[150px]', 'h-[45px]',{
            'bg-green-light': props.main && (props.default || props.hover),
            'bg-my-dark': props.btn && (props.default || props.hover),
            'bg-transparent': props.secondary || (props.pressed && (props.btn || props.main)),
            'bg-gray': (props.main || props.btn) && (props.disabled),
            'text-white': !props.pressed && (props.main || props.btn),
            'text-green-light border border-green-light': props.main && props.pressed,
            'border border-gray text-gray': props.secondary && props.disabled,
            'border border-my-dark': props.btn && props.pressed,
            'border border-gray-400 text-gray-400': props.secondary && props.default,
            'border border-gray-700 text-gray-700': props.secondary && props.hover,
            'border border-gray-900 text-gray-900': props.secondary && props.pressed,
          })}
        >
            {props.text}
        </div>
    )
}