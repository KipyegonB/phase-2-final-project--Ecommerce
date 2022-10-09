import React from 'react'

function AboutUs() {
    return (
        <div className='about'>
            <h1>About Elite store</h1>
            <p>Type of company-Private</p>
            <p>Nature of business- Retailing</p>
            <p>Headquarter- Nairobi</p>
            <p>Area of operation- Kenya</p>
            <p>Hours of Operation 24HR</p>
            <p>Contact Info: Phone No. +2547000000
                Email; infowebsite@gmai.com
            </p>
            <p>Follow us on social</p>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAACQ1BMVEX29vY7WZn+/v4Bc7IBtfD39/f8///+/v3y/f8Ab672+v8Aap8AcKrv/f/HNqtsf6qerMQ5VpIshbWYxuHl///D6v00UpAAsOlloMNvyeYVrd4Aaqb79/yOnLx80+vz///G5vKBk7vi6/+c3O5RZpg0ToJFstYAba50q8265PIxTIbyTVRamrvsSmH49/PaQIjnR2z4UEv+Uz/+Z0HX8/fxTFviRHZ8s83/9P/yTFj+XD//d0T+gUZMXslqSMqjML+m6fTtzvLZls7VPZHXP4nqSWXMOaL5UUb+pUv9s01UWMt1QsqLN8hjTcuwMLna///kRm+8yeT+i0f+vk/+yVH66KPFxfH/7f+FOchCZcZxRMqpML7NquG7MrOnN6+0Nai9OpbKOKbdQn73zebnuNz/6+z5sK/hnL/9l0n/uk/+1FPV3f/IwPDSufD73v+3xuqDlc5fc7pIX7BNUbmCMbGTT7SveMmer9rBkNJAZreVKa2FOMq/db+M5O9kOrKBWcSYdtLEpuHPmuC1btI+yfOul9Oy//+MiMupSbOyTadyZ7q+bcKdesZlRa+vgcCfZ7SZVLFL1faNMqeAO6ukUKSlN5vCUpjGV5zfiL66aKXgh8/CSIbrl8HDV57LWoT/2ujmn7DRa4XYWXTfe5jrl6TmrcfQTVz0ys/banjWT1LuiIvrlLHVdofqcmzkmKTcU0jyq6HtbVfth3L5zb30qY7wh2X2xa3ubE3+4s3vmWfwpG31wZb52Ln5xHX34LDympDz0X/ySujrAAAS/ElEQVR4nO3ci38T15UHcFf1zEiyBX4IC8lCMhYYC4OAILAJNAiD7RACwmy7aihgsDGwTeM0aUkoBVq63i5sQptHIWmdYh4xBgIxBAgGN5A/refcx7w0I+tKmODP3l+Ja42k8cxX596589BUKDJFp0KpkCkyEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgEksgswErBYtpXUqHR0rei/h7n02UimeElTcLfULx33q0ziNqnR1P1PKmKD7GH1H8F6VP6+vFknJYvFLXTsdSFH85sX/0ijcQFIvX67xSuGDNb775nzy/0vNWfjYN5Tqi9vkAobec+PkMOZa/uWZBOen1mxZRCSYT4XBLC/wrKuS14Vgm7c2n8je//et33n33jd/wvHbu3Lntp/Rs27btt6Z8evS9PUMdtsIMJNvnl57W+rTfgqU0z61tKCe1CwwtbzrcEgmFQpWV8K+ohCrh5aFIOBmwVYW/+f133njjjZ9gXiPZTvIKZPfubSQ/p3mdZePxo8c2dZit0u1V1b4yUl2X9JMekWH5a2p/VF6W9jL+iniypVgku1kkYdXy9yJVnlUhKpIzezrYfFJQV+1Vvh+Xlca6JsVUWf655WI11DAsfyZSohUkEg6wgidN8P3fcauCVK+/brXauPH4iRxvisq8uvKoUKvVOyNYyrxS64pqxQJGd0WsDKrXpqkqnWrjxl/sO5HjW6766iXlYvnqZgRLSYfLsQKtJO/l/W//Lo9qO6HaPR0V5DhviYBVdmX56gIzgeVNRMqyqgyF06wi3nzH6Ku2bzeoDKnf/95F6hc7duzYt4k2RP+LixUovrBg80f+5ZUW67B+7bAFfIWPGH5ri4UKrXbsYA3xxa0sJd1StNRw7CQkTAcZ+uTKUIK25+Z3bVRA9Ic/fnjs9OnTeyz505/ee++/zxw/zqh2sOztO+iA5WtsbPQJbxzLwDKPr+xYyeJaYWg4kY3HVUg8no3xzWco8vFwZQi7+JQSfd9G9Yf/2RT1uKdj07Ezx01UkBMddiwYMrXX17fWidZayVgNi+bW9LLULFhkxfJmItSicGOMxLJx1ePRyGqqwSR5OQxKM38GrHAQR4DN/6v3VITqdM6g0vKoNJgUze05Y0hBzuZsWL7q+nQcPp6m+YJaJWI1LK5pVo2FjC/ktWXBipws1HXB2DOomldVzYYjkZZYJhhPhCgWtML/Mzr1V079cYiZaPlQfDo8M/TBPp1q797zmxQrVlW9SqDVYGvjc8BavMBv+WT9jlihWDBYQCuSifN5sDlpwWQ2GAe0SCWvrDfPsS4dRgqnPozSV0ZzuaGhTfYMDQ2RsoOX5P6xj0LNgfQdjFqwfO1xvtzBOqF+qySs2l4/L/qCWKCRddUKJQL46VobFM5SxfeEaGVFf3WOSp3ave3Uhzkqtecvf/3oo6NHz+Tl7AcnYPcZX5Q70ceoIJ1WrOqkUctipVUKVu0CY80KYmVVuubOfbu1DfJZqmoQevrIxwzrrXO7cfSJw4KjpA3mjh39hGSfNbzR7eskLxs6q1vZsHx1aQMrIdRrlYDVsDBvLfOwyJg0QkoH1t25ETpY4evTYei2sjGO9al+6OUt0sA+sjv1Yfbu7dP7qLObcD4H++YUwmKf84xj1TZbWo4rVmg4TrvRhMMutXNhEax0NhiEvXCKdfpTRvXJ0Q74m7m/fmJVMoK9U9/Zs31z+s5ic8194IZV3aQ3DLV1hrEaFvo1M5ZWAIu+Ip7J36mOxJytPCpsqVRoxQxrD8HCZncM127PJ/lOc+YcgOCP/Z1DQ53nQadD06KdLljYwfMOZMY7+IZe/YMx1tClGbKXqMaAc7pWSHH51hCxWA91BhvX0N/OG0iAc+BAtyn7D+K7O7sP7B+Cj3CozwULeniVLligfaaHDkv9Bpba3FtDYh+UUqysyrXiMISycMFzjlDQNIJ068CweF/+N2xbB8+T7M9P9/7u7gukax+A3w7DfDr2u2H56pJB3GlIt1eL7fGIYy0yWqB/Qa3z7g7FCiV1EFUNZMLmveWWrOqopWlxukHQsVgHdQKHBJ12qM8+7+zs/Pyz/ZsxF7CgPAMXurs/74CP6QM3LOi25tcnk+11YnVVAlbtXH21PDVL8xupGSsW0LFIdcWG9b3lFpfKgg6ebjwZVuf5fVBKfefPn4Dnon9nRsRm82djo2zfJzf22RbIYXz4+ebu7r/nYOn+4dLBkx+NuCctaFUC1kK++pp3bkPe02YsaGumiiFcmRg7h+HWDKF/C1mx+mjD68SW9U/utHnLlpHDOF5nVR7NHR6BSV8MDHwBT3b/cwimdx5wq6xSUzIW7IQ1L8p/2oIVivEdC5VtDtRANpOJhVsiLek8JjrbPCzW8AjWBcIEWbFiZKDD/EF4ogMXVwDXCK057L0697s2Qx/UF56w0SeQSfyxj9Rd45K8YzglY0GmxTK2eUYZ4egmHsxm9RZqx0pbsVi72/8FPNkxAkr9JBcH6CGGjtHRUbZHOHpxxYoVW2jvNUCwDrhsDev00AmWx76qulbo0ZKJ+tY62/mgUrB4B++O5WeVFcKuyX2M4BQ1acE6zHqoEdjAaR0X0Wkt5ApqeKKjly5fuXLl8le07xogWls41kEYWTiOs5aleRKki29M6I+rQRKP35AliaeT1oM4M1hZoeGPI5FwWtWcTNyixTNWrAuk4a0ALNWTuwhOOzGXiM6lKytX4qO1V/CxFj3cz7R0rAOOWLyq1SaK1cQ/z2R1Y3taNTb3arC+qroMrAYBrCB06ImAWGXhsSwzFvTbpOVhZeUAZ2UX5Br2Vx1fdnWtJAGuq6iXg8pDrS0jFKu7m2gJYOGhLnOn4VHrnw8WjODVeCAgVlmeYMyEpQAWa3iX4LnBa13LSb7EPmr8Grp1Ua2dY6AVHeunWjpWtwiW6mlqZ0+p+g5K3DTKLx4LRp44+rRgkUnwwxkLD9F4nI9pukYLDluwLvVjwwOPSxpirSG5No5y14kb57oyCtNG+6kWYGkUC7WKxdI83gA2QXq4VWOtMWgM84vGql3IUqOvmH8Bn2a8zYJFDoWKYXmy7IAOa4aXdmLDA5NDHoK1DnN9EB4cWg5sBhd0Y5onepFqscraTLWKb4a4t+XRndhop71aGGuxl12CZWrQ/KostXmxI1Y4KGylZkI6VgqxSMtbs+bGIZjT4I02kpsKvPLmOlJlOtct7MeuriVaFGszxTpQPBYfDdKtIZvYVAJWoX66d6kViw0dyDDLduB4msRjIWtlXcMCWrfOigUfvXK9rQ2KTOdaeRn3tL9aS7Q4FtUquhmSw29qsKmJDR5o0vpxHFEsS6Xoc6yxYfERfEvWI5hsixXr0A2QQqBD2GfdWIVBLI9ym7gZXJcHKRbR4libRbDopPlVMHqvq9dPanji80vB0o/5cTH9byxocMTCNRYbOHgy/Bi0jkWLacKEtYo2Q1AzcXXdwsHD1Z1E6yLBGmFaAlhqEz0U4aNjCLKyRqclgIUbCXbmynKY1Hzsz4ZVGYkFyem8Yq1U3gp5n0WwwIdiTfRAVvXcJh08rTLGtXz514h1ZSfVKhFLC8xv5C5BfpZOra8qAYspmdec/u6f+yMXrMpIOKsKYGX1kxsGFkExYfW8NIFDh/Hbq8xcdDixcyXVolhbqJZAZTXp44RGdsIMdtcSJWBZgeiMaPyLXLGg38pk484H+vKjZsxYuESHJhAEyukOwXqJpOcO+Ct3cDLnWvNlFD6ScTqcX3vRhLVZAEut10egjfX6QiVLqyyXNBfCikRaEunpsPjlDuFKJywsJzPWS3dT8JbB26RRUq7bg2AVvYVjCNxXpFj0GIQAVrxVH4AuadeXWRxrqWl97c2qt9YVK/RxJpFsKmb/EI/dGIVlYJGGh8XkUQcnXma5k4JFSD1dxbjabmIv5hknYwjQIsP5g1vYAZvisQLzDazWOB3Hl4JV+za7ZKZZXzs/v4pmYQGsYXpNUeFei3aHatZ01Y0Ji7U80LnLse5O4lsG730zsapn1cTtQ8Rq9PpypkWwxvjhrcPFYy2zYJVcWbVLWfQjpdD62CSXfUPz8b+isE6azl3rWLThvfwUtsWpu6tfxv9BvhkkxZi6d+/e+PggKYHoTTqG6CJYmmesnx3dev5YOpoZK/9phz7L7Wi7PWrWfLaMYd3BukIdgvVgtZ4HkxZ/TRu8CVtForVyJcE6TPapXwgstUisylCsGC0Ve3fzmUUDi7S71Xas1Q/upTRNv2YpNU5G9Ky0SDMkWKj1g2PhMhaHhQPTYmqLH/UzYykMC2wI1jfreWDKw/uTKY0mNf50gmwUaWl1Xcad6q/6WWn94Fie4rFIJ+/EZb3sL2N+C68s5c5DarX6G4S5v94U4Hpw/x7mzl2+VWRadNeHHQmcXVgwMD2JA1M7mGkEoqlZ28UjvBk+JFTr1z/AHv3bDeuteUjyMm4uKRZoARY9trWWldbswoJeHq+5Chp78lTI2EjmX/NGd3egsqjVetKhTz7YwGM0R+zSiFYP0YLS6hrHq5PoAYgVeKJ6VmERr0jC63GJZYRlrqwUYhGVDVM40Lq/YdcGq9dqymXUFpTWLRzOj+1cy0pr9mFFWjKu/byDlQmLUG3Y8AgG7drko10sFi6L1ppruC3sYEdr+mcdViiEl7y7UGmO150yrG8fMqsNu7AdpiYfHdll9tK1XmJabW038HC9ZxTPJ9LSmk1YoRD5IgU/3WRSIj2W6nRhoN7BIxZKQR6TXZzJx0cwOpdZi2DdxGM1nsFb7GDNLMAi1+6RRFrC+DUAl0vXNJdLTvXKuveQWx05MoV7z1pqcurx40ccjHLRjqtnYuL203Gymxj9mh2swdI6rLzQWH7AGj4Zi8USGdwIuo5JNU/8z2Hnr/kwLLL9o1aoRU5TpVKTk/+i+ZaHjLfujQ8qZL5RPAGrY429+FiRYb2gXPaigSr/YlMrloJYjOrIq69OTRbeIWetfPDra2QXkbbDkQEnLM2OhScLLVgqP3v4HLDIN5ach+5sxQLZmPt3gxnW4H1m9SrJ1GQqpTEVtzlHx28ux8EWL62Lti86+ZYF4yzzyDeBG5P8cdCMFeBTnwcWcg27HFPG61+TQOX+zR7WwaemzFZbt26depKCaC7xaMr40xtkp6eLllZ//1X8Cp1iusKjrp2HHuvzzdcnsAu2liCM8SrhsztCWEpTC98Sglc6SL5SCGgqC14vORwqQIVf7SFfkoaxgm61leW7759gJi3BLuvbO09v8x1q3g77+8fIypm/UO5rXEKu7eNXlbIr/azf1/Sx15iuPZ0ZrIq00b5g6D4cTmSy2SzePQX+j14nWVCq0vjab2qKWSHTf7EAGOQx5hHmwYMHZCexp4ft9KxjRwF3ru2/il/7VSos1w6VGMBSZgDLa93GAVgkwm6iAr9NB4XvaEmzb83DMJRZgdJ/sKDXVpxMRhB8+GAMttoMrLEoXb8f8gLcwlhKssgvSbtiJfiNHVL/0q2Y1E+tWrt0LY7VZmqHX3UoLzxWoLx7FeiFBZmcolbIxMO48kpLryyOdTUXfbb3dVBmAEsJtpShFYokjDsdQbdFrX5qjknLXlpGp7Xz6qh+e5Vk+VjVy9gdQ8i9y/wLy8Vayu9Fo6RdhuZF1VUmThaKNcTUk++o1S95qNZWXcsZ69qlQeMGQOll9Gxz/k1Wir3tiq+q3s+boaJU+HsXTaeFWKrqdnandlEzXzxv2nV0Pl1ZhZP6nWiY1uT335mtDC0da4PexbMDNWuu3Ro3WVX4k8Lf1bGlqjXAb5VH59i7aPE0WagfDm7Of+1c/Y5Q2G9lTEOEkP6j4O/kbH/WX2FLavLJz77//pc2LVs71LeHq9pu3Lj+5fig9WZj3nnLqspJXT3fQOv+/ubpot9sz+Gl5huzIVc2ERNMIhlUFdMCmarryZOfWYIj0yme+5A7LIcOjYOU+ZZ6tCIC6XllJMhvsGe6QeL0dzGsKPBS2yrClLjX64UdrOJ+xh3mYfKaLgr+x5fD4aaPxd6osfCa89vYmT8I62/Od71U7K9/RnGcYd7NJoXe7fCsUmiSw5PsDp5096moJZnxPPvFeMZzfJY3dS3y4y/rT8z4Xyj814X/vm3L8AxTZJH/YGISSyA2rOk7ePvbnX9/jrH82aix6ZmBxZkNN6J+YSKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBCKxBKKU+73F/1f5N7DsHSRpLuloAAAAAElFTkSuQmCC' alt='oops' />
        </div>
    );
}

export default AboutUs;