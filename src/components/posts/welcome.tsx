type Props = {}

const Welcome = (props: Props) => {
  return (
    <>
        <img class='m-auto' src="https://t4.ftcdn.net/jpg/00/86/49/61/360_F_86496184_PYeEQIHCe6l8itAV15yTFvKSwMEDEx1T.jpg" alt="Welcome" />
        <h1 class='text-3xl text-center'>Welcome</h1>
        <article>
          <p>
            <h2 class='text-center text-2xl mt-7'>What To expect.</h2>
            <p class='text-center text-lg'>&middot; Programming</p>
            <p class='text-center text-lg'>&middot; Updates on Daily Things</p>
            <p class='text-center text-lg'> &middot; Events</p>
            <p class='text-center text-lg'>&middot; <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank'>Next.js/T3</a></p>
          </p>
        </article>
    </>
  )
}

export default Welcome
