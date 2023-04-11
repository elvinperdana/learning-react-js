import logo from './logo.svg';
import './App.css';
import {useRef} from "react";

function App() {
    const linkRef = useRef(null)
    const goto = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="App">
            <header className="App-header">
                <div onClick={() => {
                    goto(linkRef.current)
                }}>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, delectus ratione? Aliquam
                    blanditiis corporis doloremque fuga, ipsum laudantium libero magni maiores, minima modi mollitia non
                    numquam optio perferendis placeat quia quidem totam voluptatem. Amet, beatae consectetur debitis
                    deleniti dolore dolorem doloribus ea, eum exercitationem fuga incidunt laborum mollitia nulla
                    obcaecati porro praesentium provident quas rerum tempore ut. Amet at consequuntur debitis, dolore
                    dolorem eos exercitationem officia pariatur recusandae ut vel voluptatem voluptatibus voluptatum.
                    Animi autem, cupiditate dolor doloribus incidunt ipsum maiores maxime nisi, omnis sapiente sequi
                    vero. Ab consequuntur deserunt eligendi enim explicabo, minima possimus repellat soluta. Numquam,
                    obcaecati, rem?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi est, laboriosam. Aperiam distinctio
                    esse odio perspiciatis rem reprehenderit repudiandae, vero voluptas! Accusamus, aspernatur doloribus
                    et eum ipsum libero maiores nesciunt, quaerat quas, quos saepe sequi similique suscipit. At ex hic
                    placeat quas sapiente totam, voluptates. Dolor ex, iste! Accusantium, ad adipisci aperiam corporis
                    dolores eaque eos error esse hic impedit incidunt ipsa ipsam iusto nihil obcaecati quam quisquam
                    sapiente ullam? Aut debitis dolores, eligendi error facilis ipsa, minima modi molestiae nostrum
                    odit, praesentium quos voluptatem voluptatibus. Assumenda beatae, commodi est eveniet in labore,
                    necessitatibus neque numquam quis quos temporibus voluptatem.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={linkRef}
                >
                    Learn React
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aut illum iure laudantium
                    magnam magni, possimus quis similique voluptate! Blanditiis eius, in incidunt nulla perspiciatis
                    quaerat recusandae repellendus saepe tempore temporibus unde vero voluptatibus? Consequuntur
                    excepturi omnis optio perferendis totam voluptate voluptatum! Blanditiis distinctio doloribus
                    laborum magni ratione suscipit unde veniam voluptatum. A dolores earum exercitationem labore, nam
                    similique. Accusamus aperiam architecto assumenda at atque aut autem debitis, delectus dolorem
                    doloribus dolorum eum ex expedita explicabo in ipsa libero magnam minima omnis quasi quisquam rem
                    repellat soluta vero vitae voluptas, voluptatibus. Culpa debitis delectus dicta laborum quam,
                    ratione. Ab aliquid amet animi aspernatur atque commodi corporis cupiditate deserunt distinctio
                    dolorum et fugit harum id illo inventore iure labore magnam maxime mollitia nulla numquam
                    perspiciatis praesentium quae quos, recusandae reprehenderit sequi voluptatum? Amet aperiam autem
                    commodi culpa ducimus earum eius esse, impedit magnam nesciunt nulla optio possimus, quia saepe,
                    sequi totam veritatis! Aliquid aperiam aspernatur at deserunt dolores earum ex harum illo illum
                    ipsum laborum maxime, necessitatibus nemo officia perspiciatis provident quas ratione rem sint sunt
                    temporibus veritatis voluptate. Aliquam cumque eius facere? Amet, cum dolorem, dolorum ea eaque
                    eligendi exercitationem hic inventore laudantium mollitia, obcaecati perspiciatis quaerat sapiente
                    sit!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam cupiditate dicta eos
                    eveniet fuga, illo labore laboriosam, magnam molestias mollitia nemo numquam officia perferendis
                    provident quasi quidem quisquam quos soluta tenetur totam, ut voluptate? A aspernatur atque aut,
                    earum laudantium minus officiis repellendus vero? Aut, dicta dolorum eligendi in mollitia nulla
                    porro quam sapiente tenetur? Assumenda dolorem eos odio quibusdam reiciendis sapiente sequi
                    voluptatum. Aliquid architecto cumque dicta, dignissimos ducimus id ipsam iste itaque iure, pariatur
                    quasi qui quibusdam quisquam quod, repellendus rerum saepe sequi similique tempora voluptatem! Amet
                    animi assumenda autem cum, eius, expedita labore magni minima necessitatibus officiis perspiciatis
                    quaerat quibusdam quis reprehenderit sunt temporibus veritatis voluptatum! Consequuntur illum nobis
                    voluptates. Aspernatur blanditiis earum est minus odio optio repellendus temporibus voluptatem
                    voluptatibus. Accusantium aperiam atque nihil sequi ullam ut? Ab aliquam aspernatur at aut
                    consequuntur delectus fugit inventore modi, nesciunt nobis nostrum nulla, suscipit voluptas.
                    Architecto at cumque dolorem dolorum eligendi excepturi explicabo fugiat hic labore libero minus
                    molestiae neque officia perspiciatis, provident quae, quam quia quos recusandae repellat repellendus
                    reprehenderit repudiandae similique sit soluta suscipit unde velit voluptates, voluptatibus
                    voluptatum. Aperiam cum eveniet iusto laborum necessitatibus porro quibusdam. Consectetur
                    consequatur deserunt dicta distinctio ea eligendi eos, eveniet expedita facilis harum impedit ipsum
                    iste itaque laudantium libero minus necessitatibus qui repudiandae sed sequi, sint tempora velit.
                    Aliquid, amet animi aspernatur commodi consectetur consequatur cupiditate dicta eaque eum facilis
                    fugit incidunt iure minus, numquam officiis quam quibusdam quo repellat, repellendus suscipit.
                    Accusamus architecto, culpa dolor dolore eius facere facilis ipsam laudantium minima officiis omnis
                    quisquam sint soluta sunt temporibus velit veritatis! Aliquam amet, beatae blanditiis consequatur
                    facere, facilis, itaque laboriosam libero porro quod recusandae reiciendis totam. Aliquam aperiam
                    asperiores at autem commodi corporis enim eos fuga harum laudantium libero nemo neque nobis, quam,
                    repudiandae sed similique sit, veniam.</p>
            </header>
        </div>
    );
}

export default App;
