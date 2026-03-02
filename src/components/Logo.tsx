import darkLogo from '../assets/dark.png'
import lightLogo from '../assets/light.png'

const Logo = ({onPageChange, isDarkMode}) => {
  return (
    <>
            <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onPageChange('home')}
        >
          {/* <div className="w-8 h-8 bg-primary dark:bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white dark:text-primary font-bold text-xl">G</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-primary dark:text-white">
            GrowClients<span className="text-secondary dark:text-accent">AI</span>
          </span> */}
          <div>
            <img src={isDarkMode ? darkLogo : lightLogo} alt="GrowClientsAI Logo" className="w-50" />
          </div>
        </div>
    </>
  )
}

export default Logo