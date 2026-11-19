<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" encoding="UTF-8"/>

<xsl:template match="/">
  <xsl:for-each select="/ArrayOfConnection/Connection[Name != '[Root]' and Name != '' and ConnectionType != 'Credential']">
    <xsl:sort select="Name"/>
    <xsl:value-of select="ID"/>
    <xsl:text>&#9;</xsl:text>
    <xsl:value-of select="Name"/>
    <xsl:text>&#9;</xsl:text>
    <xsl:value-of select="Group"/>
    <xsl:text>&#9;</xsl:text>
    <xsl:value-of select="ConnectionType"/>
    <xsl:text>&#9;</xsl:text>
    <xsl:value-of select="UpdateDateTime"/>
    <xsl:text>&#10;</xsl:text>
  </xsl:for-each>
</xsl:template>
</xsl:stylesheet>
