type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
        <header class="bg-white shadow dark:bg-gray-800">
            <nav class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <a href="/" class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>

                <a href="/blog" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blog</a>
            </nav>
        </header>
    </>
  )
}

export default Navbar
