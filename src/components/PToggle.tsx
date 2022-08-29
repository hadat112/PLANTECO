import classNames from "classnames"
export function PToggle(props: any) {
    return (
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input type="checkbox" value="" id="green-toggle" className="sr-only peer" />
            <div className="w-11 h-6 border border-light-gray rounded-full peer dark:bg-gray-700
             dark:peer-focus:ring-green-light peer-checked:after:translate-x-full 
            peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
            after:bg-light-gray after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all 
            dark:border-gray-600 peer-checked:bg-green-light"></div>
        </label>

    )
}