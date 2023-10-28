import {Bebas_Neue,Poppins
} from 'next/font/google'
const pop=Poppins({
    subsets: ['latin'],
    weight: '100'
  })
const Footer=()=>{
    return (
            <footer id="footer" className={`${pop.className}`}>
                <div className="footer-top">
                    <div className="text-center flex justify-center items-center">
                        <div className="social-icons">
                            <ul>
                                <li>
                                    <a href='https://linkedin.com/in/elayabharathi-mv' target='_blank'>
                                        <img src='https://www.admsep.org/images/icons/linkedin.png'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://github.com/ebharathi' target='_blank'>
                                        <img src='https://avatars.githubusercontent.com/u/9919?s=280&v=4'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://leetcode.com/Elayabharathi' target='_blank'>
                                        <img src='https://leetcode.com/static/images/LeetCode_logo_rvs.png'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://codesandbox.io/u/Elayabharathi' target='_blank'>
                                        <img src='https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png'/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex">
                            <div className="flex-[6] text-center">
                                <p >&copy; 2023 Elayabharathi</p>
                            </div>
                            <div className="flex-[6] text-right">
                                <p className="pull-right">Developed by Elayabharathi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>    
)
}
export default Footer;