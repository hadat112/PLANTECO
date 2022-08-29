import classNames from "classnames"

export function PTag(props: any) {
    return (
        <div className={classNames('tag', 'border-b-2', 'flex', 'items-center', 'justify-center', 'p-2', 'w-[120px]',{
            'border-gray': !props.actived,
            'border-green-light text-green-light': props.actived,
        })}>
            {props.text}
        </div>
    )
}