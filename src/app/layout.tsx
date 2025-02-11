import type { Metadata } from "next";
import "./styles/globals.css";
import { Header, HeaderTop } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Container } from "@/components/custom-ui";

export const metadata: Metadata = {
  title: "Бетон Сайти - Sifatli Beton Mahsulotlari",
  description:
    "Eng sifatli beton mahsulotlarini yetkazib beruvchi sayt. Biz bilan ishlang, sifatni tanlang!",
  keywords: [
    "beton",
    "sifatli beton",
    "beton mahsulotlari",
    "qurilish materiali",
  ],
  authors: [{ name: "Janob Bekbol", url: "https://beton-sayt.uz" }],
  openGraph: {
    title: "Бетон Сайти - Sifatli Beton Mahsulotlari",
    description: "Eng sifatli beton mahsulotlarini yetkazib beruvchi sayt.",
    url: "https://best-beton.uz/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <HeaderTop />
        <Header />
        <main id="main">
          <Container>
            {children}

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              debitis officia voluptas quae consectetur cum? Repellat voluptate
              minus explicabo facilis qui quibusdam ex suscipit cum ullam
              consequuntur dolor, eaque tenetur dignissimos molestias aliquid,
              ipsam mollitia et, quasi repudiandae illum perspiciatis. Ullam
              fugiat doloremque sequi culpa labore id! Reiciendis, id dolore
              corporis ullam quidem repellendus sint assumenda molestias
              necessitatibus similique neque? Ipsam accusamus quam alias saepe
              illum. Nemo dolores repellat laborum nihil eveniet beatae
              consectetur alias, ex voluptate in. Iusto quidem explicabo
              temporibus minima nam sit repellat consequatur, pariatur veritatis
              maiores dolorem praesentium. Esse eveniet tempore consequuntur
              minima quae officiis ratione? Unde, tenetur beatae obcaecati nemo
              perferendis laudantium similique recusandae quae. Amet vel
              repellat dolorem itaque animi fugiat aliquam architecto,
              repudiandae, optio reiciendis ducimus autem soluta ea consectetur,
              vero eos eaque dolore. Laudantium iste soluta numquam nemo
              molestiae officia pariatur voluptates repellat eius? Pariatur
              earum, ipsam commodi suscipit hic rerum, nihil ipsa quo dicta
              inventore perferendis deleniti ratione laborum, natus unde
              repellendus quisquam quidem? Optio, tempore delectus officiis
              provident commodi consequatur quasi illo nesciunt perspiciatis eos
              reprehenderit eveniet deleniti. Asperiores numquam consequatur
              veritatis aspernatur voluptatibus soluta illo iste illum maiores
              ex quisquam quis, nihil id commodi neque. Error cum est
              doloremque, doloribus nobis iusto dicta itaque voluptate vero
              maiores quo illum quos quibusdam quod soluta veniam ipsa accusamus
              maxime laudantium ad eius quidem impedit. Placeat odio nam unde
              voluptatibus ab hic possimus reprehenderit rerum molestias esse
              ducimus, dicta, quisquam officia architecto repellendus excepturi
              quod odit facilis consectetur doloremque similique atque quae quam
              a. Odit aut a vitae sunt tempore accusamus dicta similique ipsum
              molestias, pariatur cupiditate obcaecati labore autem doloremque
              magni quidem placeat voluptatum delectus maiores voluptas
              voluptate sint. A officia iure iste ut delectus labore nemo quidem
              aperiam eius dolore, reprehenderit earum quisquam ex, vitae
              temporibus praesentium suscipit iusto obcaecati placeat pariatur
              ullam? A, asperiores aut fuga id sapiente ratione aperiam
              explicabo similique expedita omnis. Earum voluptates aspernatur
              non, laudantium quisquam sunt? Quaerat tempora rerum fugit magni
              repellendus labore incidunt, sint laboriosam dolorem facere
              debitis sequi repellat, quos possimus? Explicabo est, quod rem sit
              quam aliquid delectus fugiat dicta, facere dignissimos nam soluta
              qui, cumque alias. Consequuntur pariatur, officiis corrupti id
              quis quae commodi! Dignissimos facilis at illum, rem ipsa
              voluptate tempora voluptatibus repudiandae enim, accusantium,
              maiores itaque eaque alias facere? Eligendi deleniti ad rerum
              doloribus impedit saepe rem labore velit voluptate repellendus
              maiores animi eum nemo esse harum possimus odio necessitatibus
              consectetur vel beatae, ut iste et pariatur? Quo ipsum blanditiis
              repudiandae accusantium excepturi quidem, dignissimos commodi, vel
              cumque odio error quibusdam, vitae perferendis hic iste molestias
              voluptas qui eius voluptates fugit ex. Itaque, voluptate? Saepe
              facere sapiente ducimus nam dolor harum expedita et, ut, rem porro
              aliquid. Reiciendis sunt delectus, ad illum atque soluta a labore
              tempora omnis quam repudiandae, voluptatum dolorem. Iste ipsa
              alias dolor culpa totam. Enim odio quos aliquid explicabo quaerat
              eaque? Nesciunt expedita excepturi ab ipsa facilis sequi, aliquam
              fugiat inventore molestias cumque ullam. Aperiam facilis fugiat
              laborum eligendi in. Explicabo assumenda nulla fugit aliquam
              veniam deserunt magni natus eum dolor vitae quidem hic nostrum
              nesciunt illum accusantium autem excepturi laborum voluptatem
              sequi recusandae, unde necessitatibus. Distinctio nostrum
              molestias eaque voluptas voluptatibus dolore unde, doloribus,
              voluptatum ea animi aperiam possimus modi quasi similique ullam
              aut repudiandae illum fugit. Ex fuga minus rem similique maxime
              nihil quisquam eveniet nemo reiciendis odio! Porro voluptate,
              voluptas sequi autem magni nihil dicta doloribus officiis harum,
              inventore accusamus sapiente sunt vitae alias consectetur ad neque
              nisi itaque nesciunt! Ipsum atque dolore voluptatum ad incidunt
              sapiente maxime dolores voluptatem enim, aut consectetur nam
              voluptate iusto fugit cumque quaerat laboriosam hic consequuntur
              aliquid molestias natus tempora dicta alias! Alias suscipit
              doloribus nisi aut molestiae magni enim officiis repellendus quae
              doloremque vitae amet saepe, reiciendis officia aspernatur
              consectetur in eius nobis sint? Sapiente quis in eaque dolore
              possimus, at dolores molestias quisquam repudiandae ut neque
              dolorum, iste corporis placeat quidem recusandae accusantium!
              Placeat perspiciatis consequatur eaque velit, dolorem adipisci,
              nisi et quod harum laboriosam natus eius cumque numquam alias
              quibusdam modi quo quae quaerat nulla! Porro aut ipsum, nemo
              pariatur suscipit dignissimos ab corporis? Pariatur similique unde
              recusandae sit officiis accusantium quibusdam, a in dicta
              provident tempora sed dignissimos, dolorem eligendi! Sunt deserunt
              suscipit consequatur quam nobis? Cupiditate eum ut repudiandae
              explicabo rem consequatur saepe commodi minus fugiat hic suscipit
              repellendus odio impedit, expedita alias eius reprehenderit maxime
              animi doloribus culpa quis. Officia doloremque placeat illo rerum
              odit. Quos aut, quisquam officiis a praesentium ex dolore, rem
              quae dolores necessitatibus quod molestias veritatis autem, error
              sequi aliquam quasi nihil. Eius commodi laudantium sapiente id
              vero totam voluptate. Eius unde, omnis quasi dolor ducimus
              repellendus fugit neque dolorum, ea odit est temporibus assumenda
              inventore illo delectus fugiat sed officiis rem adipisci
              consequuntur eligendi quo hic error cumque? Laborum voluptatem
              ullam, ratione molestias expedita at odit assumenda commodi
              accusantium harum inventore labore deserunt, quia omnis neque
              voluptates eos placeat. Inventore nostrum voluptates consequuntur
              iure impedit distinctio, error similique maiores exercitationem
              sint eveniet sunt vel saepe, culpa debitis tempora explicabo
              recusandae delectus perferendis provident, quasi et reiciendis
              reprehenderit. Quae quibusdam quasi aliquam a necessitatibus qui
              minus doloremque eaque recusandae nulla. Sint fuga incidunt, natus
              eum eaque earum voluptate quisquam minus, nulla ab corporis
              perferendis sapiente vel nisi beatae? Asperiores obcaecati
              corrupti molestiae maiores atque ea magni officia qui error quae,
              optio sapiente nobis alias in? Sapiente optio sed eum consequatur
              accusamus voluptas error iusto consequuntur est alias laboriosam
              quo nisi facilis, dolorum cum in vel dolorem, culpa nostrum ipsa
              temporibus magnam nobis ea? Maiores quas eveniet aperiam unde
              cupiditate harum itaque voluptatum, quibusdam minima assumenda
              veniam nisi reiciendis expedita, necessitatibus rem illum
              repellendus dolores tempore nemo? Iusto facere impedit aut itaque?
              A dolores quis labore natus itaque iure vero perspiciatis dicta,
              optio ipsam esse obcaecati voluptate corporis ducimus numquam
              voluptas dolorum, ab id ipsum sequi accusamus incidunt odit?
              Pariatur dolor facilis, architecto ea dignissimos explicabo quia
              quasi debitis corrupti nulla exercitationem fugiat! Quo quis quam
              officia, in cum sequi ratione alias consequuntur voluptatum
              aliquam omnis, eos perferendis, impedit animi error recusandae
              reiciendis vel fuga exercitationem quidem aut. Impedit, est,
              consequatur facilis et expedita veniam voluptates voluptatem, nam
              reiciendis ratione vero quo hic aut. Molestias dignissimos iste
              nam natus quasi esse deleniti excepturi assumenda soluta, ipsa
              libero tempore mollitia velit enim ipsam, sapiente error?
              Aspernatur dolorum illum, praesentium excepturi, consequatur
              expedita eveniet quae veritatis labore veniam laborum perferendis.
              Voluptatibus qui repellendus error? Natus error nihil optio minima
              tenetur deleniti blanditiis culpa animi harum quidem inventore,
              laboriosam est consequuntur nisi soluta rerum commodi dolor
              exercitationem maiores accusamus iusto veritatis consectetur.
              Explicabo rerum non architecto minus voluptatum recusandae optio
              sunt, ipsa iste molestias maxime vel officia. Maiores illo nisi
              aspernatur porro, a sequi, commodi, voluptas dolores ipsam
              excepturi ex rerum dolore perferendis provident vel quam laborum
              amet. Quaerat suscipit enim amet totam ut nisi, similique, beatae
              qui repudiandae, quibusdam commodi placeat dolores laudantium
              architecto cum. Atque, asperiores. Asperiores odio, voluptatem
              impedit ullam soluta enim adipisci sed est iste reiciendis.
              Placeat, libero quos quod deserunt molestias nisi ipsum saepe
              mollitia suscipit voluptas repellat nam voluptatem quis omnis sed
              repudiandae maiores fugiat voluptate dolorum cupiditate error
              culpa deleniti. Et architecto excepturi impedit amet, culpa labore
              sit aliquid dolorem modi dolore cumque ratione temporibus tempore
              nisi quisquam. Obcaecati quasi sint suscipit impedit dolorum,
              cupiditate sunt error quidem odit distinctio libero perferendis
              consequuntur pariatur aspernatur tenetur hic at. Repudiandae
              architecto suscipit quasi vitae libero aspernatur laboriosam,
              nulla maiores molestias animi pariatur nesciunt facere aliquid sit
              nisi corrupti et dolorum expedita molestiae doloremque voluptatum
              quia eaque, ducimus quos. Ipsa vel corporis cupiditate temporibus
              tenetur porro! Quasi sunt ipsam consectetur at obcaecati
              distinctio adipisci assumenda quam magnam quibusdam velit
              reiciendis tempore, libero hic dolore consequuntur veniam eveniet
              inventore molestias tenetur nulla perferendis. Perspiciatis
              numquam deserunt in sapiente molestias nesciunt, error repellendus
              aliquid neque, maxime aut, dolorem impedit totam. Magni quos
              aliquam rem doloremque magnam sunt delectus repellat, amet beatae
              illum voluptatum voluptatem nisi quam animi, corrupti praesentium
              dolor repudiandae obcaecati, dignissimos dolore. Ipsam, odit omnis
              quia, in id tempore laboriosam laudantium expedita libero enim
              officia, quaerat vel dolore iure ex adipisci debitis rerum laborum
              ipsa soluta aliquam vitae? Quisquam eos dolore assumenda
              recusandae iusto dicta dolor ea harum sed. Animi neque omnis optio
              nam eaque quisquam possimus. Labore voluptate omnis odio ratione
              fuga libero quod perferendis harum dolorem, magni sapiente
              accusantium, asperiores illo. Pariatur fuga ipsum dolor nostrum
              accusantium. Ipsam, doloremque voluptatem, magnam beatae vel,
              iusto voluptas porro quas reiciendis alias facilis nesciunt earum
              ea veritatis distinctio natus rerum suscipit! Vel itaque fugiat
              hic cumque nisi modi tempore? Consequuntur voluptatum quas ducimus
              ratione, sed vel alias adipisci molestiae soluta fugit delectus
              qui cupiditate atque! Deleniti error praesentium quia saepe quidem
              sint corrupti officia odit aut, eveniet illo dolorum eaque amet
              labore aliquid adipisci blanditiis magni alias optio vero iure
              aspernatur ad. Pariatur labore accusantium doloremque rerum illum
              beatae obcaecati officiis cum culpa aspernatur error officia,
              exercitationem repellat animi iusto libero corrupti nihil
              dignissimos iste sapiente dolorem molestiae non sit voluptatibus.
              Quidem voluptatum ab natus, ex exercitationem ratione minus?
              Ratione iste numquam illo eaque eum, ea ullam hic aliquam, at qui
              quas nesciunt voluptate atque voluptatem tempora alias deserunt
              soluta quia, nam minus. Aut voluptate alias minus harum non
              voluptatum doloremque labore voluptatem, nostrum sunt esse soluta
              dolore quam aspernatur eius assumenda error deserunt? Soluta
              voluptatibus recusandae dignissimos, odit perferendis adipisci
              repellendus aut assumenda ut eos temporibus tempora illum dicta
              iusto magnam eius itaque! Veritatis impedit nostrum ipsam pariatur
              rem animi quidem magnam, suscipit, dolorem molestiae distinctio
              nulla numquam officiis debitis esse laudantium in ratione hic, id
              sapiente quibusdam labore. Exercitationem, culpa vero similique
              distinctio pariatur quibusdam quam facere aperiam. Maiores
              voluptates ut quaerat maxime eligendi cupiditate tenetur sunt
              animi! Quibusdam distinctio dignissimos corrupti, debitis fugiat
              ipsa eius expedita ex laboriosam adipisci modi natus, deleniti
              animi voluptatem molestias. Deserunt ipsa debitis, animi,
              inventore, odio esse veniam fugiat recusandae deleniti in amet ut
              aspernatur totam explicabo? Dignissimos ullam accusamus cumque
              illum vel porro fugiat doloremque ea fuga tempora, labore adipisci
              natus iste dicta atque aspernatur sunt alias maiores excepturi sit
              obcaecati tenetur asperiores. At voluptatum omnis molestias.
              Perspiciatis enim quo pariatur repellendus. Vitae omnis quia
              voluptatibus magni? Ab sapiente iste cupiditate, exercitationem
              aperiam eaque adipisci accusamus ex. Laudantium adipisci,
              voluptates molestias sapiente error doloremque quos iure sed a
              sint beatae inventore cumque consequuntur deleniti perferendis
              dolorem totam quae expedita in non fuga. Ad facilis dolorum optio
              inventore pariatur! Sapiente praesentium consequatur dicta omnis
              recusandae dolor nostrum, soluta eligendi tempore dolorum, et
              tempora maiores quos ullam culpa exercitationem. Accusantium
              cupiditate quia impedit debitis molestiae exercitationem quod
              commodi, ducimus nemo incidunt, modi blanditiis distinctio
              deserunt. Laboriosam quos modi eligendi quod eum, inventore
              molestiae possimus ullam culpa, repudiandae omnis illo praesentium
              asperiores, beatae iure adipisci voluptatum! Inventore
              consequuntur animi in molestiae fuga voluptate rem consequatur,
              dolore dolorem temporibus illo neque fugiat odio, ea quo expedita
              omnis quidem mollitia aspernatur asperiores nulla laboriosam
              minima aliquid et. Alias accusamus itaque unde distinctio
              reiciendis soluta veritatis, amet minima saepe, commodi dicta
              possimus vel porro, placeat consectetur? Provident veritatis
              pariatur, placeat doloribus nemo minima a necessitatibus iste,
              quisquam aliquid dolorem maiores rerum ut autem ea consectetur eos
              dolores debitis saepe corrupti hic voluptas accusantium esse?
              Voluptatibus porro maiores ipsam ad, autem amet dicta minus cum ea
              dignissimos quaerat! Dolorum culpa temporibus error voluptatum
              velit facere optio? Aliquid nobis repellendus autem fugit, illum
              rerum doloribus consequuntur dolore incidunt earum explicabo
              perferendis temporibus amet quisquam accusantium itaque. Molestiae
              earum, minus sequi ab exercitationem voluptas nesciunt alias, ad
              laboriosam sit, architecto nisi ducimus autem totam est odit.
              Nobis corrupti velit fuga, minima tempore quia suscipit. Inventore
              vel veritatis corrupti tempora eaque accusamus! Praesentium
              tenetur deleniti harum, dicta, quidem assumenda neque, debitis
              eligendi ea nisi molestiae fugit magni quae aut a explicabo vel
              fuga voluptatibus rem veniam voluptate aliquid porro! Autem
              excepturi maxime deleniti eum voluptas sed accusamus accusantium
              architecto commodi illum? Alias tempore delectus molestias nemo
              mollitia dolor iste possimus ab quo perferendis, incidunt vero a
              reiciendis, quisquam tenetur deleniti nobis exercitationem
              nesciunt! Dolor, dolores ipsa!
            </p>
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
