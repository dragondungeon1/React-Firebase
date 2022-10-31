export default function Middle() {
    return (
        <div className="container max-w-6xl mx-auto font-poppins mt-6">
            <h2 className="text-4xl font-bold tracking-tight text-center">
                Programming laguages
            </h2>
            <p className="mt-2 text-lg text-center text-gray-600">
                Check out the list of awesome programming laguages .
            </p>
            <div
                className="
            grid grid-cols-4
            gap-8
            mt-10
            sm:grid-cols-8
            lg:grid-cols-12
            sm:px-8
            xl:px-0
          "
            >
                <div
                    className="
              relative
              flex flex-col
              items-center
              justify-between
              col-span-4
              px-8
              py-12
              space-y-4
              overflow-hidden
              bg-gray-100
              sm:rounded-xl
              hover:bg-purple-500
              transition
              duration-300
            "
                >
                    <h4 className="text-xl font-medium text-gray-700">PHP</h4>
                    <p className="text-base text-center text-blackl">
                        I started working with PHP since 2019 and the Symfony framwork. I
                        like Symfony very much because of the opportunities it offers.
                    </p>
                </div>

                <div
                    className="
              flex flex-col
              items-center
              justify-between
              col-span-4
              px-8
              py-12
              space-y-4
              bg-gray-100
              sm:rounded-xl
              hover:bg-yellow-300
              transition
              duration-300
            "
                >
                    <h4 className="text-xl font-medium text-gray-700">JavaScript</h4>
                    <p className="text-base text-center text-black">
                        JavaScript, who doesn't use JavaScript these days? My favorite
                        framework to work with is NuxtJs because it is fast and developer
                        friendly.
                    </p>
                </div>

                <div
                    className="
              flex flex-col
              items-center
              justify-between
              col-span-4
              px-8
              py-12
              space-y-4
              bg-gray-100
              sm:rounded-xl
              hover:bg-red-500
              transition
              duration-300
            "
                >
                    <h4 className="text-xl font-medium text-gray-700">HTML</h4>
                    <p className="text-base text-center text-black">
                        Because i work a lot with the Symfony php framekwork i am used to
                        using twig
                    </p>
                </div>

                <div
                    className="
              flex flex-col
              items-center
              justify-between
              col-span-4
              px-8
              py-12
              space-y-4
              bg-gray-100
              sm:rounded-xl
              hover:bg-blue-500
              transition
              duration-300
            "
                >
                    <h4 className="text-xl font-medium text-gray-700">CSS3</h4>
                    <p className="text-base text-center text-black">
                        For frontend work I mostly use Bootstrap 5 and Tailwind CSS.
                    </p>
                </div>

                <div
                    className="
              flex flex-col
              items-center
              justify-between
              col-span-4
              px-8
              py-12
              space-y-4
              bg-gray-100
              sm:rounded-xl
              hover:bg-pink-500
              transition
              duration-300
            "
                >
                    <h4 className="text-xl font-medium text-gray-700">Design</h4>
                    <p className="text-base text-center text-black">
                        The right kind of building blocks and creativenesss to take your
                        company to the next level.
                    </p>
                </div>
            </div>
        </div>
    )
}