import "./Title.css"

function Title({ name }) {
    return (
        <div className="flex justify-center items-center mr-[100px] mb-[60px] md:mb-[50px] ">
            <div class="content">
                <h2>{name}</h2>
                <h2>{name}</h2>

            </div>
        </div>
    )
}

export default Title