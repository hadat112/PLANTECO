import classNames from "classnames"
export function QuestionBtn(props: any) {
    return (
        <div className={classNames('question-btn', 'text-white', 'rounded-full', 'h-[60px]', 'w-[60px]', 'p-4', 'text-3xl', 'font-light', 'items-center', 'justify-center', 'flex',
            {
                'bg-my-dark': props.dark,
                'bg-gray': !props.dark,
            })}>?</div>
    )
}