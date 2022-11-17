
import Image from 'next/image'

import colors from '@/styles/colors'

import Page from '@/layouts/main'

import Button from '@/components/button'

const Accessibilite = () => (
  <Page title='Déclaration d’accessibilité' description='Consultez la déclaration d’accessibilité de pcrs.beta.gouv'>
    <section className='fr-px-3w fr-py-3w fr-px-md-15w fr-py-md-10w'>
      <h1>Déclaration d’accessibilité</h1>
      <div className='fr-container fr-pb-10w fr-pt-5w'>
        <div className='fr-grid-row fr-grid-row--center'>
          <div className='fr-col-12 fr-col-md-8'>
            <Image src='/images/illustrations/accessibilite.png' layout='responsive' height={100} width={500} alt aria-hidden='true' />
          </div>
        </div>
      </div>
      <p>
        <b>pcrs.beta.gouv</b> s’engage à rendre ses sites internet, intranet, extranet et ses progiciels <b>accessibles</b> (et ses applications mobiles et mobilier urbain numérique) conformément à <b>l’article 47 de la loi n°2005-102 du 11 février 2005</b>. À cette fin, elle met en œuvre la stratégie et les actions suivantes :
      </p>
      <ul className='fr-p-3w'>
        <li className='fr-p-1w'><span className='fr-icon-arrow-right-s-line' aria-hidden='true' />Fournir un site web accessible.</li>
        <li className='fr-p-1w'><span className='fr-icon-arrow-right-s-line' aria-hidden='true' />Prêter attention aux informations d’accessibilité des données.</li>
      </ul>

      <div className='fr-notice fr-notice--info'>
        <div className='fr-container'>
          <div className='fr-notice__body'>
            <p className='fr-notice__title'>
              Cette déclaration d’accessibilité a été établie le 17/11/2022 et s’applique à pcrs.beta.gouv.fr.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className='fr-px-3w fr-py-3w fr-px-md-15w fr-py-md-10w section-color'>
      <h2 className='fr-mb-7w'>État de conformité</h2>
      <div className='fr-alert fr-alert--error'>
        <h3 className='fr-alert__title'>Non-conforme</h3>
      </div>

      <p className='fr-pt-5w'><b>pcrs.beta.gouv.fr</b> est <b>non-conforme</b> avec le <b>référentiel général d’amélioration de l’accessibilité (RGAA)</b>, un audit d’accessibilité n’ayant pas encore été réalisé. L’absence d’audit d’accessibilité ne remet pas en cause le <b>caractère accessible</b> du site web actuel.</p>
    </section>

    <section className='fr-px-3w fr-py-3w fr-px-md-15w fr-py-md-10w section-secondary'>
      <h2>Information et contact</h2>
      <p>Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez <b>contacter notre équipe</b> pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme.</p>

      <Button
        href='mailto:contact@pcrs.beta.gouv.fr'
        isExternal
        label='Contacter l’équipe'
      >
        <span className='fr-icon-mail-line' aria-hidden='true' />&nbsp;Nous contacter
      </Button>
    </section>

    <section className='fr-px-3w fr-py-3w fr-px-md-15w fr-py-md-10w'>
      <h2>Voie de recours</h2>
      <p>
        Si vous constatez un défaut d’accessibilité vous empêchant d’accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse de notre part, vous êtes en droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits.
        Plusieurs moyens sont à votre disposition :
      </p>

      <ul className='fr-p-2w'>
        <li><span className='fr-icon-arrow-right-s-line' aria-hidden='true' />Écrire un message au <b>Défenseur des droits.</b></li>
        <li><span className='fr-icon-arrow-right-s-line' aria-hidden='true' />Contacter <b>le délégué du Défenseur des droits</b> dans votre région.</li>
        <li><span className='fr-icon-arrow-right-s-line' aria-hidden='true' />
          Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre).<br />
          <b className='fr-p-md-3w'>Défenseur des droits</b><br />
          <b className='fr-p-md-3w'>Libre réponse 71120</b><br />
          <b className='fr-p-md-3w'>75342 Paris CEDEX 07</b>
        </li>
      </ul>
      <div />
    </section>

    <style jsx>{`

      .accessibility-illustration {
        width: 100%;
        max-width: 500px;
      }

      .fr-alert--error {
        background: white;
      }

      .fr-alert__title {
        color: ${colors.error425};
      }

      .section-color {
        background: ${colors.info200};
        color: white;
      }

      .section-color h2 {
        color: white;
      }

      .section-secondary {
        background: ${colors.grey975};
      }
    `}</style>
  </Page>
)

Accessibilite.propTypes = {}
export default Accessibilite
