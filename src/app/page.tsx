import Image from "next/image";
import Link from "next/link";
import { LandingPage, Blog } from "./lib/api";

export default async function Home() {
  const data = await LandingPage();
  const posts: Blog[] = await Blog();
  const topPosts = posts.slice(0, 3);

  return (
    <div>
      <section>
        <div>
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary">
                Tugas KSI
                <span className="block text-dark font-bold text-4xl mt-2 mb-1 lg:text-6xl">
                  Candi Gebang
                </span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
                KSI | UMBY | WISATA
              </h2>
              <p className="font-medium text-slate-400 mb-10">{data.summary}</p>
            </div>

            <div className="w-full flex justify-end self-end px-4 lg:w-1/2">
              <div className="mt-3">
                <Image
                  src={"/img/hero.png"}
                  alt="Hero Section Image"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24" id="blog">
        <h1 className="font-bold text-lg text-center pb-5">Top Blog</h1>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-5 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {topPosts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <Image
                className="object-cover w-full rounded-t-lg h-50 w-auto shadow-md"
                src={post.thumbnailUrl}
                alt="01"
                width={500}
                height={200}
              />
              <div className="flex items-center gap-x-4 pt-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/detail?id=${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-24 pb-5" id="maps">
        <h1 className="font-bold text-lg text-center pb-5">Maps</h1>
        <div className="border border-gray-200 p-2 rounded-3xl shadow-md">
          <iframe
            className="w-full h-[540px] rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3611983972623!2d110.41371377485713!3d-7.751460076857693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59786eea3b2f%3A0x28b240601a68c6ff!2sCandi%20Gebang!5e0!3m2!1sid!2sid!4v1700020491322!5m2!1sid!2sid"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In a labore eum illum dolores commodi obcaecati neque, incidunt corporis pariatur necessitatibus minima blanditiis facere beatae architecto reiciendis tempore deleniti hic.</p> */}
      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aliquid tempora quam laborum nemo molestiae odit error inventore. Adipisci eos, voluptates tempora quisquam ex fuga maiores rem eum iusto optio vero dolores sint dolore, in quis magni aut error nisi maxime eaque autem reiciendis sapiente dolor aliquam. Excepturi aperiam dolorum ipsa, quia velit praesentium ipsam sint atque aliquid, voluptatem iusto laboriosam corrupti nulla illo. Provident ducimus laudantium dolor id earum asperiores accusantium officiis, eius illo quae quidem a aperiam fugit repellendus eveniet! Voluptatem numquam ad fugit officiis placeat dignissimos, voluptatibus vero obcaecati voluptate quibusdam error nihil repellat consequatur perferendis excepturi beatae nemo. Minus, fugit unde delectus ut cum voluptate ducimus dolores eligendi iure in optio rem quos illo suscipit natus animi nesciunt officiis aliquam vel! Labore mollitia laudantium natus enim omnis rerum sequi, illo delectus temporibus consequuntur qui distinctio. Deserunt accusamus fuga cumque mollitia ea tenetur quas eos minus voluptates natus nostrum dignissimos eum ullam nobis facilis, laborum sunt exercitationem beatae laudantium. Animi similique pariatur quibusdam tempore omnis dicta quae. Accusamus autem corporis placeat architecto deleniti distinctio voluptatum, laudantium, possimus fugit itaque modi perferendis ea soluta esse quod debitis. Magni adipisci sapiente a veritatis exercitationem nostrum, odit suscipit dolore dicta inventore sequi eaque quia dolorum soluta minima ad obcaecati. Doloribus velit repudiandae ducimus, officiis at tempore aspernatur nobis maxime nostrum illum sint! Consequuntur natus laudantium mollitia non rerum quod unde consequatur nobis, ullam alias repellat, earum eligendi magnam adipisci minima ducimus iste incidunt dolor nesciunt possimus harum doloremque odit. Quo quia autem distinctio vitae est commodi voluptas incidunt sunt voluptate eveniet ratione a, provident rem laboriosam atque. Nihil est quos omnis ad, culpa itaque harum expedita veritatis quae maxime dolor maiores a! Nulla excepturi saepe, beatae voluptates omnis quis ut architecto blanditiis voluptate repudiandae natus dicta tempore ab molestias delectus. Vero aliquid molestiae, corrupti ipsam unde assumenda cum! Dolor, optio. Molestiae, nulla sapiente ipsam reiciendis facere culpa recusandae ea. Ab animi quas, inventore iure deserunt eos sunt harum porro culpa soluta accusamus minima dolorum enim velit autem dicta perspiciatis unde dolor provident labore quos? Voluptatem, sapiente tenetur quaerat saepe vero aspernatur quis voluptas nobis ab quos, ut fuga porro reiciendis? Quos itaque tenetur consequuntur harum consequatur aperiam officiis dolore. Molestias totam voluptas quasi blanditiis, possimus fugit architecto ipsa, tenetur beatae dolorem magnam, consequuntur a cum optio autem aliquid rem. Quis commodi voluptate reprehenderit eligendi fugit quaerat aliquam pariatur, minus exercitationem suscipit beatae odio dolorem cum sed necessitatibus aut natus iure ex repellendus in! Ullam nam veniam ducimus sunt minus. Fuga velit quaerat blanditiis id veniam deserunt, molestias tempore nulla asperiores dignissimos, doloremque sed quidem tempora totam numquam accusamus cum laboriosam nam voluptate harum temporibus eos. Nostrum, illo similique inventore quae consequuntur maiores nisi odit adipisci ut debitis mollitia laudantium tempore eum ratione dicta, doloremque, nulla itaque? Odio ipsum quos accusamus odit saepe sequi. Quo nemo, nesciunt accusamus doloribus, fuga ipsam earum doloremque adipisci ut inventore maxime natus est culpa odio autem debitis totam delectus quae corporis laudantium quidem, expedita labore excepturi? Nemo eius dolorum modi, incidunt rem fugit doloribus tempora natus accusamus quae corrupti alias dolorem nesciunt, assumenda vel? Rerum unde id iste eveniet perspiciatis eligendi minima facere modi, et, saepe, aliquam molestiae quod eaque reprehenderit. Aliquam nihil illo architecto, eligendi eaque rem provident neque inventore cum iure exercitationem, eum natus libero perspiciatis atque sequi facere, laudantium quo! Reprehenderit quo esse nobis, hic ipsum illum, autem eos, eum quos vel excepturi repellat repudiandae iste pariatur magnam mollitia eligendi. Adipisci nobis vel quasi repellendus debitis ullam nesciunt nostrum veniam consequatur vero facilis doloribus, corrupti distinctio explicabo iure reprehenderit dolorum voluptatibus id saepe ab dignissimos delectus, minima pariatur quam. Unde quibusdam asperiores maiores ab, eaque cumque expedita quod, vitae, rem dolore dignissimos esse. Nisi aut saepe tempora molestias commodi quas. Assumenda rem sapiente non quod similique molestias dolorem corrupti eos sunt eveniet numquam, delectus ipsa laudantium adipisci facilis sequi? Voluptates ipsum tenetur quasi quas enim, blanditiis corrupti aspernatur unde officiis magni totam porro reprehenderit provident ducimus quidem exercitationem numquam itaque recusandae. Illum voluptatibus suscipit natus officia quibusdam distinctio ea consequatur fugit officiis labore. Optio ea architecto molestiae! Consequatur dolore, facere ab debitis cum asperiores exercitationem sapiente distinctio deleniti a cumque soluta, voluptatum magnam obcaecati non? Sequi beatae numquam corrupti, fuga nesciunt voluptatibus odit, asperiores minima quos temporibus delectus et veniam minus aliquam culpa. Consectetur quia ratione minima debitis! Officia repudiandae voluptate debitis, aliquid facilis mollitia illum aliquam tempora ab optio veniam maxime rerum expedita placeat et. Ex enim nobis harum possimus saepe autem qui velit perspiciatis fuga mollitia. Ab itaque incidunt, sit optio ducimus iusto ut ullam illum, maxime porro labore esse nam perspiciatis possimus non veritatis molestias vero laborum! Minus est, aut animi numquam illum adipisci corporis in ipsum rerum. Est molestias commodi quo reprehenderit rem veniam quas? Hic repellat dolor alias corporis rerum magnam quaerat non sequi quidem quos quas nesciunt id itaque provident vero, suscipit asperiores praesentium modi delectus minus voluptatibus, consequuntur neque sit? Veniam repellat, hic sed dicta ut, dolorum deserunt totam minima voluptatibus odit earum minus, dolores illum iusto! Unde officiis rem neque aliquam accusamus harum doloremque eos voluptate error cum ut laborum, sit facere dignissimos odit magni illum molestiae autem accusantium explicabo quam delectus? Dolorem pariatur accusamus expedita, dolores fugit rem error reiciendis voluptatum id itaque asperiores quaerat deleniti perspiciatis! Rerum suscipit, pariatur sequi natus repellat impedit et ut! Non dignissimos neque molestias perferendis, unde dolorem quam itaque aliquam velit sit sed tenetur aut voluptate adipisci corporis incidunt consequatur! Omnis, corrupti! Unde optio accusamus officia nesciunt soluta pariatur placeat, aspernatur est labore, aut suscipit esse impedit laborum voluptates aliquid reiciendis, quibusdam ab et praesentium fugiat veniam amet. Suscipit recusandae earum corporis laborum. Eius fugit atque inventore quisquam rem cupiditate sunt voluptatem facilis tenetur. Ut quaerat enim doloremque optio? Quia commodi porro, harum mollitia necessitatibus, maxime, voluptatum sunt eaque reiciendis libero non neque. Praesentium nisi sequi possimus itaque doloribus suscipit quod ipsa necessitatibus libero doloremque aut facere odit quaerat aliquam nemo qui est, autem veniam! Velit, porro!</p> */}
    </div>
  );
}
