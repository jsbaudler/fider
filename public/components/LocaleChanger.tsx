import { useFider } from "@fider/hooks"
import { Select } from "@fider/components"
import { activateI18N } from "@fider/services"
import React, { useState } from "react"

import locales from "@locale/locales"

const LocaleChanger = () => {
  const fider = useFider()

  const [locale, setLocale] = useState<string>(localStorage.getItem("locale") || fider.session.tenant.locale)

  const setLocalStorage = (locale: string) => {
    localStorage.setItem("locale", locale)
  }

  return (
    <Select
      field="locale"
      defaultValue={locale}
      options={Object.entries(locales).map(([k, v]) => ({
        value: k,
        label: v.text,
      }))}
      onChange={(o) => {
        setLocale(o?.value || locale)
        activateI18N(o?.value || locale)
        setLocalStorage(o?.value || locale)
      }}
    ></Select>
  )
}

export default LocaleChanger
