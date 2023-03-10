import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.childern}
            <Footer />
        </div>
    )
}

export default Layout