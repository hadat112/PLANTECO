import classNames from 'classnames'
import { BiDotsVerticalRounded, BiBitcoin } from 'react-icons/bi'


export function Wallet(props: any) {
    return (
        <div className={classNames('wallet', 'flex', 'justify-between', 'rounded-2xl', 'p-4 w-[300px]',{
            'bg-green-light text-white': props.active,
            'bg-white': !props.active,
        }, )}>    
            <div className="wallet-coin self-center">
                <BiBitcoin className='text-4xl '/>
            </div>
            <div className="wallet-info self-center">
                <span className="text-sm block text-gray-700 mb-2">Total earning value</span>
                <p className="text-base inline font-semibold">38,569.00</p> <span className="text-sm text-gray-400 inline">PEC</span>
            </div>
            <div className="wallet-more">
                <BiDotsVerticalRounded></BiDotsVerticalRounded>
            </div>
        </div>
    )
}