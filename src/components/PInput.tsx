import classNames from "classnames"

export function PInput(props: any) {
    let label;
    if(props.error) label = <label htmlFor="" className="text-red">{props.err}</label>
    return (
        <div className="input-container">
            <label htmlFor="" className={classNames({'text-gray': props.disabled})}>
                {props.title}
            </label>
            <input type="text" className= {classNames('PButton', 'flex', 'items-center', 'bg-transparent', 'justify-center', 'outline-0', 'rounded-xl', 'p-4', 'w-[250px]', 'h-[45px]',{
                'border border-gray text-gray': props.default,
                'border border-gray-500 text-black': props.full,
                'border border-red text-red': props.error,
                'border border-gray bg-disabled text-gray': props.disabled,
          })}/>
          {label}
        </div>
    )
}