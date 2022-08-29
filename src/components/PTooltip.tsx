import classNames from "classnames"
import { AiFillStar } from "react-icons/ai"
export function PTooltip(props: any) {
    return (
        <div className={classNames('tag', 'rounded-2xl', 'flex', 'items-center', 'justify-center', 'p-2', 'w-[320px]', 'h-[130px]',{
            'bg-white': !props.dark,
            'bg-my-dark text-white': props.dark,
        })}>
            <AiFillStar className="text-8xl m-8" />
            <p>
            {props.text}
            </p>
        </div>
    )
}